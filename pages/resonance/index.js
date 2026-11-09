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
    let html = '';
    let isFirst = true;

    (manifest.countries || []).forEach(c => {
      if (fs.existsSync(path.join(countriesDir, c.slug, 'index.js'))) {
        html += `<option value="${c.slug}" ${isFirst ? 'selected' : ''}>${c.icon || '📍'} ${c.name}</option>`;
        isFirst = false;
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
    const { country } = req.query;
    console.log(`\n[DEBUG] Fetching cities for country: "${country}"`);
    
    if (!country) return res.send('<option value="">Select country</option>');

    const cities = loadCitiesForCountry(country);
    console.log(`[DEBUG] Cities array found via loader:`, cities);

    if (!cities || cities.length === 0) {
      console.warn(`[DEBUG] No cities arrays resolved for country shortcut node: ${country}`);
      return res.send('<option value="">No cities configured</option>');
    }

    const html = cities.map((city, index) => {
      const isSelected = index === 0 ? 'selected' : '';
      console.log(`[DEBUG] Mapping option -> name: ${city.name}, slug: ${city.slug}, active: ${index === 0}`);
      return `<option value="${city.slug}" ${isSelected}>${city.name}</option>`;
    }).join('\n');

    // ⚡ Tell HTMX to automatically recalculate the dashboard with the newly selected first city
    res.setHeader('HX-Trigger', 'dependencies-updated');
    res.send(html);
  } catch (err) {
    console.error("[DEBUG] Error loading city options:", err);
    res.send('<option value="">Error loading cities</option>');
  }
});

// Route 3: Core Calculator & Calculation Pipeline
// ⚡ inside pages/resonance/index.js -> router.get('/calculate', ...)
router.get('/calculate', (req, res) => {
  try {
    let { level = 'country', country, city, selectedSignalKey, selectedSignalLabel } = req.query;

    // Fix the 500 Error: Flatten array parameters caused by HTMX duplication drops
    if (Array.isArray(level)) level = level[0];
    if (Array.isArray(country)) country = country[0];
    if (Array.isArray(city)) city = city[0];
    if (Array.isArray(selectedSignalKey)) selectedSignalKey = selectedSignalKey[0];
    if (Array.isArray(selectedSignalLabel)) selectedSignalLabel = selectedSignalLabel[0];

    if (!country) return res.send('<p class="text-xs text-slate-400 p-4">Select parameter scope.</p>');

    // ⚡ FIX THE 404 TRAP: Validate city context belongs to the active country folder map
    if (level === 'city') {
      const cities = loadCitiesForCountry(country);
      const cityListSlugs = cities.map(c => c.slug);
      
      // If city is completely blank OR belongs to a different country (e.g., country=spain, city=cdmx)
      if (!city || city.trim() === '' || city === 'undefined' || !cityListSlugs.includes(city)) {
        if (cities.length > 0) {
          city = cities[0].slug; // Safely transition to the first city in the new country
        } else {
          return res.send('<p class="text-xs text-red-500 p-4">No city dataset resolved for this profile scope.</p>');
        }
      }
    }

    const cleanCountry = country.toLowerCase().trim();
    const cleanCity = city ? city.toLowerCase().trim() : '';

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
