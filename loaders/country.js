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
          // Keep cache flushed for predictable hot reloading in local development
          delete require.cache[require.resolve(indexPath)];
          const countryData = require(indexPath);
          
          countriesList.push({
            slug,
            ...countryData
          });
        } catch (err) {
          // Log clean system indicators without polluting standard streams
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

module.exports = {
  loadCountries,
  loadCountry
};
