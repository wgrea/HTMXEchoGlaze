// pages/resonance/index.js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Use your centralized manifest data file as the absolute single source of truth
const manifestPath = path.join(__dirname, '../../data/manifest.json');
const countriesDir = path.join(__dirname, '../../data/countries');

// Route 1: Pull only verified countries explicitly recorded in the manifest file
router.get('/country-dropdown-options', (req, res) => {
  try {
    if (!fs.existsSync(manifestPath)) {
      return res.status(500).send('<option value="">Manifest missing</option>');
    }

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    let optionsHtml = '';
    let isFirst = true;

    (manifest.countries || []).forEach(country => {
      // Cross-verify that a matching javascript file directory actually exists
      const indexPath = path.join(countriesDir, country.slug, 'index.js');
      
      if (fs.existsSync(indexPath)) {
        optionsHtml += `<option value="${country.slug}" ${isFirst ? 'selected' : ''}>${country.icon || '📍'} ${country.name}</option>`;
        isFirst = false;
      }
    });

    res.send(optionsHtml || '<option value="">No configured countries</option>');
  } catch (err) {
    console.error("Failed parsing country list matrix:", err);
    res.status(500).send('<option value="">Error processing schema</option>');
  }
});

// Route 2: Render contextual cities mapped to the selected country's manifest entries
router.get('/city-dropdown-options', (req, res) => {
  try {
    const { country } = req.query;
    if (!country) return res.send('<option value="">Select country</option>');

    if (!fs.existsSync(manifestPath)) return res.send('');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

    // Find the country object by matching slugs
    const targetCountry = (manifest.countries || []).find(c => c.slug === country.toLowerCase());
    if (!targetCountry) return res.send('<option value="">Country unlinked</option>');

    // Filter cities matching target parent ID attributes
    const matchedCities = (manifest.cities || []).filter(city => city.countryId === targetCountry.id);
    let optionsHtml = '';
    let isFirst = true;

    matchedCities.forEach(city => {
      // Format display string syntax (buenos-aires -> Buenos Aires)
      const name = city.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      optionsHtml += `<option value="${city.slug}" ${isFirst ? 'selected' : ''}>${name}</option>`;
      isFirst = false;
    });

    res.send(optionsHtml || '<option value="">No cities configured</option>');
  } catch (err) {
    console.error("Failed parsing matching city arrays:", err);
    res.send('<option value="">Error loading cities</option>');
  }
});

module.exports = router;

// Calculate probability matrices and output signals grid layout
router.get('/calculate', (req, res) => {
  const { level = 'country', country, city } = req.query;
  if (!country) return res.send('<p class="text-xs text-slate-400">Select parameter scope.</p>');

  let dataPath = '';
  if (level === 'country') {
    dataPath = path.join(countriesDir, country.toLowerCase(), 'index.js');
  } else {
    if (!city) return res.send('');
    dataPath = path.join(countriesDir, country.toLowerCase(), `${city.toLowerCase()}.js`);
  }

  if (!fs.existsSync(dataPath)) {
    return res.status(404).send('<p class="text-xs text-red-500">Resonance data source unresolvable.</p>');
  }

  delete require.cache[require.resolve(dataPath)];
  const targetData = require(dataPath);
  const signals = targetData.resonanceSignals || targetData.metrics || {};

  let html = `<div id="resonance-section" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">`;

  Object.keys(signals).forEach(key => {
    const score = signals[key];
    // Formats snakeCase parameters into readable labels (e.g., lateNightDining -> Late Night Dining)
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    
    html += `
      <div class="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition cursor-pointer"
           onclick="showGlobalMatches('${key}', '${label}')">
        <div class="flex justify-between items-center">
          <span class="text-xs font-bold text-slate-700 tracking-wider">${label}</span>
          <span class="px-2 py-0.5 bg-blue-50 text-blue-700 font-black rounded text-xs">${score}/10</span>
        </div>
        <div class="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
          <div class="bg-blue-600 h-full transition-all duration-300" style="width: ${score * 10}%"></div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  res.send(html);
});

module.exports = router;
