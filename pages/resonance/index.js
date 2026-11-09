// pages/resonance/index.js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { renderResonanceDashboard, renderGlobalMatches } = require('./renderers');
const { loadCitiesForCountry } = require('../../loaders/country');

const countriesDir = path.join(__dirname, '../../data/countries');

// Route 1: Country Dropdown Options
router.get('/country-dropdown-options', (req, res) => {
  try {
    const manifestPath = path.join(__dirname, '../../data/manifest.json');
    if (!fs.existsSync(manifestPath)) {
      console.error("[DEBUG] Manifest missing at:", manifestPath);
      return res.status(500).send('<option value="">Manifest missing</option>');
    }
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    
    // Check persistent state first
    const activeCountry = req.session?.selectedCountry || 'argentina';
    
    let html = '';
    (manifest.countries || []).forEach(c => {
      if (fs.existsSync(path.join(countriesDir, c.slug, 'index.js'))) {
        const isSelected = c.slug === activeCountry ? 'selected' : '';
        html += `<option value="${c.slug}" ${isSelected}>${c.icon || '📍'} ${c.name}</option>`;
      }
    });
    res.send(html || '<option value="">No configured countries</option>');
  } catch (err) {
    console.error("[DEBUG] Error reading country options:", err);
    res.status(500).send('<option value="">Error processing schema</option>');
  }
});

// Route 2: Render contextual cities
router.get('/city-dropdown-options', (req, res) => {
  try {
    let { country } = req.query;
    
    // FIX: Fallback directly to active dynamic session tracker if missing from query params
    if (!country || country === 'undefined') {
      country = req.session?.selectedCountry || 'argentina';
    } else {
      country = country.toLowerCase().trim();
      if (req.session.selectedCountry !== country) {
        req.session.selectedCountry = country;
        req.session.selectedCity = null; // Clear out of bounds city references on country update
      }
    }

    const cities = loadCitiesForCountry(country);

    if (!cities || cities.length === 0) {
      return res.send('<option value="">No cities configured</option>');
    }

    const currentActiveCity = req.session?.selectedCity;

    const html = cities.map((city, index) => {
      // Prioritize the persistent session city, otherwise fall back to the first available city index
      const isSelected = currentActiveCity 
        ? currentActiveCity === city.slug 
        : index === 0;
        
      return `<option value="${city.slug}" ${isSelected ? 'selected' : ''}>${city.name}</option>`;
    }).join('\n');

    // Inform HTMX that it can safely compute data layers now that city select array is built
    res.setHeader('HX-Trigger', 'dependencies-updated');
    res.send(html);
  } catch (err) {
    console.error("[DEBUG] Error loading city options:", err);
    res.send('<option value="">Error loading cities</option>');
  }
});

// Route 3: Core Calculator & Calculation Pipeline
router.get('/calculate', (req, res) => {
  try {
    let { level = 'country', country, city, selectedSignalKey, selectedSignalLabel } = req.query;

    // Flatten duplicate query array injections
    if (Array.isArray(level)) level = level[0];
    if (Array.isArray(country)) country = country[0];
    if (Array.isArray(city)) city = city[0];
    if (Array.isArray(selectedSignalKey)) selectedSignalKey = selectedSignalKey[0];
    if (Array.isArray(selectedSignalLabel)) selectedSignalLabel = selectedSignalLabel[0];

    // Mutate and sync global state
    if (country) {
      country = country.toLowerCase().trim();
      if (req.session.selectedCountry !== country) {
        req.session.selectedCountry = country;
        req.session.selectedCity = null;
      }
    } else {
      country = req.session?.selectedCountry || 'argentina';
    }

    if (city && city !== 'undefined' && city.trim() !== '') {
      city = city.toLowerCase().trim();
      req.session.selectedCity = city;
    } else if (level === 'city') {
      city = req.session?.selectedCity;
    }

    if (!country) return res.send('<p class="text-xs text-slate-400 p-4">Select parameter scope.</p>');

    // Validate city context mapping sequence
    if (level === 'city') {
      const cities = loadCitiesForCountry(country);
      const cityListSlugs = cities.map(c => c.slug);
      
      if (!city || !cityListSlugs.includes(city)) {
        if (cities.length > 0) {
          city = cities[0].slug; 
          req.session.selectedCity = city; // Store corrected selection sync
        } else {
          return res.send('<p class="text-xs text-red-500 p-4">No city dataset resolved for this profile scope.</p>');
        }
      }
    }

    const cleanCountry = country;
    const cleanCity = level === 'city' ? city : '';

    const dataPath = level === 'country' 
      ? path.join(countriesDir, cleanCountry, 'index.js')
      : path.join(countriesDir, cleanCountry, `${cleanCity}.js`);

    if (!fs.existsSync(dataPath)) {
      return res.status(404).send('<p class="text-xs text-red-500 p-4">Data source unresolvable.</p>');
    }

    delete require.cache[require.resolve(dataPath)];
    const targetData = require(dataPath);
    const signals = targetData.resonanceSignals || targetData.metrics || {};

    let globalMatchesHTML = '';
    if (selectedSignalKey && selectedSignalLabel) {
      let matches = [];
      try {
        fs.readdirSync(countriesDir).forEach(slug => {
          const p = path.join(countriesDir, slug, 'index.js');
          if (fs.existsSync(p)) {
            const cData = require(p);
            const score = cData.resonanceSignals?.[selectedSignalKey] || cData.metrics?.[selectedSignalKey] || 0;
            if (score >= 7) {
              matches.push(cData.name || slug.charAt(0).toUpperCase() + slug.slice(1));
            }
          }
        });
      } catch (err) { 
        console.error("Failed calculating global overlaps list:", err); 
      }
      globalMatchesHTML = renderGlobalMatches(selectedSignalLabel, matches);
    }

    const sanitizedQuery = { level, country: cleanCountry, city: cleanCity };
    res.send(renderResonanceDashboard(signals, sanitizedQuery, selectedSignalKey, selectedSignalLabel, globalMatchesHTML));
  } catch (err) {
    console.error("Calculation loop failure:", err);
    res.status(500).send('<p class="text-xs text-red-500 p-4">Internal calculator calculation error.</p>');
  }
});

module.exports = router;
