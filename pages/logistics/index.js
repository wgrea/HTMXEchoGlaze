/* pages/logistics/index.js */
const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const ROOT_DIR = path.resolve(__dirname, '../../');

const { loadCountry, loadCountries, loadCitiesForCountry } = require(path.join(ROOT_DIR, 'loaders/country'));

const {
  filterAndSortCountries,
  renderFilterBar,
  renderComparisonCards,
  renderSeasonalityStrip
} = require('./renderers');

// 1. Compare All View Endpoint
router.get('/compare-all', (req, res) => {
  const templatePath = path.join(ROOT_DIR, 'components/logistics/compare-all.html');
  if (!fs.existsSync(templatePath)) return res.status(404).send('Template missing');

  const selectedMonth = req.query.month || 'none';
  const visaType = req.query.visaType || 'all';
  const sortMode = req.query.sortMode || 'none';

  const rawCountries = loadCountries();
  const filtered = filterAndSortCountries(rawCountries, selectedMonth, visaType, sortMode);

  const filterBarHtml = renderFilterBar(selectedMonth, visaType, sortMode);
  const comparisonGridHtml = renderComparisonCards(filtered, selectedMonth, visaType);

  // Debug trace statement
  console.log(`[STATE LOGIC] Compare All loaded. Preserved session context country: ${req.session?.selectedCountry || 'none'}`);

  let html = fs.readFileSync(templatePath, 'utf8');
  html = html
    .replace('{{FILTER_BAR}}', filterBarHtml)
    .replace('{{COMPARISON_GRID}}', comparisonGridHtml);

  res.send(html);
});

// 2. Single Country View Endpoint
router.get('/country', (req, res) => {
  // 1. Check if the user explicitly clicked a country card override (e.g. clicking Brazil in the grid)
  let countryParam = req.query.country;

  // 2. If no query parameter exists (like clicking the top navigation tab bar),
  // pull the globally active session variable. If the session is completely new, default to argentina.
  if (!countryParam || countryParam === 'undefined' || countryParam.trim() === '') {
    countryParam = req.session?.selectedCountry || 'argentina';
  } else {
    countryParam = countryParam.toLowerCase().trim().replace(/\s+/g, '-');
  }

  // Lock backend record to the verified selection choice
  req.session.selectedCountry = countryParam;

  // 1. EXTRACT INCOMING QUERY VALUE
  let incomingQueryCountry = req.query.country;

  // 2. RIGID LOGIC CHECK: Only change the location state if the user explicitly 
  // selected a non-empty, valid country string parameter from a select dropdown or a button click.
  if (incomingQueryCountry && incomingQueryCountry.trim() !== '' && incomingQueryCountry !== 'undefined' && incomingQueryCountry !== 'Loading Registry...') {
    req.session.selectedCountry = incomingQueryCountry.toLowerCase().trim().replace(/\s+/g, '-');
  }

  // 3. SECURE RECOVERY LAYER: If no country is active in the session yet (like a fresh browser boot),
  // set the global fallback anchor to argentina.
  if (!req.session.selectedCountry) {
    req.session.selectedCountry = 'argentina';
  }

  // Auto-sync valid nested city indices to keep layout fragments like Accommodation from freezing
  const availableCities = loadCitiesForCountry(req.session.selectedCountry);
  if (availableCities && availableCities.length > 0) {
    const cityListSlugs = availableCities.map(c => c.slug.toLowerCase().trim());
    if (!req.session.selectedCity || !cityListSlugs.includes(req.session.selectedCity.toLowerCase().trim())) {
      req.session.selectedCity = availableCities[0].slug; 
    }
  } else {
    req.session.selectedCity = null;
  }

  // Explicit Terminal State Logger Messages
  console.log(`\n======================================================`);
  console.log(`[STATE LOG] 🌍 UNIFIED LOGISTICS SYSTEM ROUTER`);
  console.log(`📍 ACTIVE PERSISTENT COUNTRY SELECTION : "${req.session.selectedCountry.toUpperCase()}"`);
  console.log(`🏙️ ACTIVE LOCKED CITY NEST STATE     : "${(req.session.selectedCity || 'NONE').toUpperCase()}"`);
  console.log(`======================================================\n`);

  const selectedMonth = req.query.month || 'none';
  const country = loadCountry(req.session.selectedCountry);
  const templatePath = path.join(ROOT_DIR, 'components/logistics/country-view.html');

  if (!country || !fs.existsSync(templatePath)) return res.status(404).send('Template missing');

  const allCountries = loadCountries();
  const readiness = country.travelReadiness || {};
  const seasonalityStripHtml = renderSeasonalityStrip(readiness.seasonality, selectedMonth);

  // Echo selection states inside country-view select box tags dynamically
  const dropdownOptions = allCountries.map(c => 
    `<option value="${c.slug}" ${c.slug === country.slug ? 'selected' : ''}>${c.name}</option>`
  ).join('');

  let html = fs.readFileSync(templatePath, 'utf8');
  html = html
    .replace('{{COUNTRY_OPTIONS}}', dropdownOptions)
    .replace('{{COUNTRY_ICON}}', country.icon || '🌍')
    .replace('{{REGION}}', country.region || 'N/A')
    .replace('{{SEASONALITY_STRIP}}', seasonalityStripHtml)
    .replace('{{WORK_POLICY}}', readiness.visa?.workPolicy || 'Standard tourist provisions')
    .replace('{{REGISTRATION}}', readiness.visa?.registrationAfterDays > 0 ? `Required after ${readiness.visa.registrationAfterDays} days` : 'No registration required');

  res.send(html);
});


module.exports = router;
