/* pages/logistics/index.js */
const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const ROOT_DIR = path.resolve(__dirname, '../../');

// FIXED: Added loadCitiesForCountry to the destructuring block
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

  let html = fs.readFileSync(templatePath, 'utf8');
  html = html
    .replace('{{FILTER_BAR}}', filterBarHtml)
    .replace('{{COMPARISON_GRID}}', comparisonGridHtml);

  res.send(html);
});

// 2. Single Country View Endpoint
router.get('/country', (req, res) => {
  // Capture explicit country change parameter first
  const countryParam = req.query.country || req.session?.selectedCountry || 'argentina';
  
  // Write directly into global session so all other tabs immediately read this selected country
  req.session.selectedCountry = countryParam.toLowerCase().trim();

  // Load valid city indices for this country to prevent out-of-bounds city states when navigating tabs
  const availableCities = loadCitiesForCountry(req.session.selectedCountry);
  if (availableCities && availableCities.length > 0) {
    req.session.selectedCity = availableCities[0].slug; // Lock the first available city
  } else {
    req.session.selectedCity = null;
  }

  const selectedMonth = req.query.month || 'none';
  const country = loadCountry(req.session.selectedCountry);
  const templatePath = path.join(ROOT_DIR, 'components/logistics/country-view.html');

  if (!country || !fs.existsSync(templatePath)) return res.status(404).send('Template missing');

  const allCountries = loadCountries();
  const readiness = country.travelReadiness || {};
  const seasonalityStripHtml = renderSeasonalityStrip(readiness.seasonality, selectedMonth);

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