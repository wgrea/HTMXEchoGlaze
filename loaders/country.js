// loaders/country.js
const fs = require('fs');
const path = require('path');

const countriesDir = path.join(__dirname, '../data/countries');

const loadCountries = () => {
  if (!fs.existsSync(countriesDir)) return [];
  
  const entries = fs.readdirSync(countriesDir, { withFileTypes: true });
  const countriesList = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const slug = entry.name;
      const indexPath = path.join(countriesDir, slug, 'index.js');
      
      if (fs.existsSync(indexPath)) {
        try {
          delete require.cache[require.resolve(indexPath)];
          const countryData = require(indexPath);
          
          countriesList.push({
            slug,
            ...countryData
          });
        } catch (err) {
          console.error(`[System Error] Failed to require index for ${slug}:`, err.message);
        }
      }
    }
  }
  return countriesList;
};

const loadCountry = (slug) => {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  const indexPath = path.join(countriesDir, cleanSlug, 'index.js');
  
  if (!fs.existsSync(indexPath)) return null;
  
  try {
    delete require.cache[require.resolve(indexPath)];
    const countryData = require(indexPath);
    return {
      slug: cleanSlug,
      ...countryData
    };
  } catch (err) {
    console.error(`[System Error] Resolution failure on country slug: ${slug}`, err.message);
    return null;
  }
};

/** ⭐ Shared Options Fragment Builder for Country Selectors */
const getCountryDropdownOptions = (selectedSlug = 'argentina') => {
  const activeCountries = loadCountries();
  return activeCountries.map(country => {
    const countryValue = (country.slug || '').toLowerCase().trim();
    const countryName = country.name || countryValue;
    const countryIcon = country.icon || '📍';
    const isSelected = countryValue === selectedSlug.toLowerCase().trim();
    
    return `<option value="${countryValue}" ${isSelected ? 'selected' : ''}>${countryIcon} ${countryName}</option>`;
  }).join('\n');
};

/** ⭐ New Helper: Scan disk layout for custom city sub-modules */
const loadCitiesForCountry = (countrySlug) => {
  if (!countrySlug) return [];
  const cleanSlug = countrySlug.toLowerCase().trim();
  const targetDir = path.join(countriesDir, cleanSlug);

  if (!fs.existsSync(targetDir)) return [];

  return fs.readdirSync(targetDir)
    .filter(file => file !== 'index.js' && (file.endsWith('.js') || file.endsWith('.ts')))
    .map(file => {
      const citySlug = file.replace(/\.(js|ts)$/, '');
      // Format to human readable (e.g. buenos-aires -> Buenos Aires)
      const cityName = citySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return { slug: citySlug, name: cityName };
    });
};

module.exports = {
  loadCountries,
  loadCountry,
  getCountryDropdownOptions,
  loadCitiesForCountry
};
