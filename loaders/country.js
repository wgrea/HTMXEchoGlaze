// loaders/country.js
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../');

const COUNTRY_REGISTRY = [
  { id: 'ARG', slug: 'argentina', data: require(path.join(ROOT_DIR, 'partials/logistics/argentina')) },
  { id: 'AZE', slug: 'azerbaijan', data: require(path.join(ROOT_DIR, 'partials/logistics/azerbaijan')) }
];

function normalizeCountry(entry) {
  const data = entry.data.default || entry.data; // Handles ES Module / CommonJS exports
  return {
    ...data,
    id: entry.id,
    slug: entry.slug,
    name: data.name || entry.slug.charAt(0).toUpperCase() + entry.slug.slice(1),
    region: data.region || 'N/A',
    icon: entry.id === 'ARG' ? '🇦🇷' : '🇦🇿',
    viewMode: data.viewMode || 'country-first',
    resonanceMode: data.resonanceMode || 'country-first',
  };
}

function loadCountry(id) {
  const normalizedId = id.toLowerCase();
  const entry = COUNTRY_REGISTRY.find(c => 
    c.slug === normalizedId || c.id.toLowerCase() === normalizedId
  );

  if (!entry) return null;
  return normalizeCountry(entry);
}

function loadCountries() {
  return COUNTRY_REGISTRY.map(entry => normalizeCountry(entry)).filter(Boolean);
}

module.exports = { loadCountry, loadCountries, COUNTRY_REGISTRY };