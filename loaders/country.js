// loaders/country.js
const fs = require('fs');
const path = require('path');

const countriesDir = path.join(__dirname, '../data/countries');

const loadCountries = () => {
  if (!fs.existsSync(countriesDir)) return [];
  
  const entries = fs.readdirSync(countriesDir, { withFileTypes: true });
  const countriesList = [];

  for (const entry of entries) {
    // Check if it's a directory (e.g., 'argentina', 'azerbaijan')
    if (entry.isDirectory()) {
      const slug = entry.name;
      const indexPath = path.join(countriesDir, slug, 'index.js');
      
      if (fs.existsSync(indexPath)) {
        try {
          // Clear require cache if you want hot-reloading during dev, 
          // or just standard require:
          const countryData = require(indexPath);
          
          countriesList.push({
            slug,
            ...countryData
          });
        } catch (err) {
          console.error(`Error loading country index for ${slug}:`, err);
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
    const countryData = require(indexPath);
    return {
      slug: cleanSlug,
      ...countryData
    };
  } catch (err) {
    console.error(`Error loading country file for slug ${slug}:`, err);
    return null;
  }
};

module.exports = {
  loadCountries,
  loadCountry
};