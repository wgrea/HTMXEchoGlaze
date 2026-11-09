/* pages/accommodation/index.js */
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { loadCitiesForCountry } = require('../../loaders/country');
const { renderStays, renderFood } = require('./renderers');

const countriesDir = path.join(__dirname, '../../data/countries');

// Route 1: Dynamically render options element list via loader file scan
router.get('/city-dropdown-options', (req, res) => {
  const countrySlug = req.query.country || req.session?.selectedCountry || 'argentina';
  if (!countrySlug) return res.send('<option value="">Select a city</option>');

  try {
    const cities = loadCitiesForCountry(countrySlug);
    if (cities.length === 0) return res.send('<option value="">No cities found</option>');

    const currentActiveCity = req.session?.selectedCity;
    const optionsHtml = cities.map((city, index) => {
      const isSelected = currentActiveCity ? currentActiveCity === city.slug : index === 0;
      return `<option value="${city.slug}" ${isSelected ? 'selected' : ''}>${city.name}</option>`;
    }).join('\n');

    // Ensure this header property sits right above your optionsHtml template payload response inside Route 1
    // Removed: res.setHeader('HX-Trigger', 'load-data');
    res.send(optionsHtml);

  } catch (err) {
    res.send('<option value="">No cities found</option>');
  }
});


// Route 2: Render stay options array or food strategy guides based on mode parameters
router.get('/render', (req, res) => {
  let { country, city, mode = 'stay' } = req.query;

  // 1. SANITIZE STRING PARAMETERS
  const isCountryBlank = !country || country === 'undefined' || country.trim() === '' || country === 'Loading Registry...';
  const isCityBlank = !city || city === 'undefined' || city.trim() === '' || city === 'Select a city' || city === '';

  if (isCountryBlank) {
    country = req.session?.selectedCountry || 'argentina';
  } else {
    country = country.toLowerCase().trim();
  }

  // 2. RIGID PARSING CONTEXT COMPARISON
  const validCities = loadCitiesForCountry(country).map(c => c.slug.toLowerCase().trim());
  const cleanCityQuery = city ? city.toLowerCase().trim() : '';

  if (isCityBlank || !validCities.includes(cleanCityQuery)) {
    // FIXED: Added an explicit [0] index array accessor to pull the string instead of the raw array reference expression
    city = req.session?.selectedCity && validCities.includes(req.session.selectedCity.toLowerCase().trim())
      ? req.session.selectedCity.toLowerCase().trim()
      : (validCities.length > 0 ? validCities[0] : '');
  } else {
    city = cleanCityQuery;
  }


  // 3. MUTATE PERSISTENT BACKEND RECORDS GLOBALLY
  req.session.selectedCountry = country;
  req.session.selectedCity = city;

  console.log(`[ACCOMMODATION LOG ENGINE] Sync Complete -> Country: ${country}, City: ${city}, Mode: ${mode}`);

  if (!country || !city) {
    return res.send('<p class="text-xs text-slate-400 italic">Select a target location.</p>');
  }

  let cityFilePath = path.join(countriesDir, country, `${city}.js`);
  if (!fs.existsSync(cityFilePath)) {
    cityFilePath = path.join(countriesDir, country, `${city}.ts`);
  }

  if (!fs.existsSync(cityFilePath)) {
    return res.status(404).send('<p class="text-xs text-red-500">City location registry unresolvable.</p>');
  }

  delete require.cache[require.resolve(cityFilePath)];
  const cityData = require(cityFilePath);

  if (mode === 'stay') {
    res.send(renderStays(cityData.stayOptions || []));
  } else {
    res.send(renderFood(cityData.foodStrategy || {}));
  }
});

module.exports = router;
