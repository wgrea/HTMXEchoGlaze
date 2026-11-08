// pages/accommodation/index.js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { loadCitiesForCountry } = require('../../loaders/country');

const countriesDir = path.join(__dirname, '../../data/countries');

// Route 1: Dynamically render options element list via loader file scan
router.get('/city-dropdown-options', (req, res) => {
  const countrySlug = req.query.country;
  if (!countrySlug) return res.send('<option value="">Select a city</option>');

  try {
    const cities = loadCitiesForCountry(countrySlug);

    if (cities.length === 0) {
      return res.send('<option value="">No cities found</option>');
    }

    const optionsHtml = cities.map((city, index) => {
      const isFirst = index === 0;
      return `<option value="${city.slug}" ${isFirst ? 'selected' : ''}>${city.name}</option>`;
    }).join('\n');

    res.send(optionsHtml);
  } catch (err) {
    res.send('<option value="">No cities found</option>');
  }
});

// Route 2: Render stay options array or food strategy guides based on mode parameters
router.get('/render', (req, res) => {
  const { country, city, mode = 'stay' } = req.query;
  if (!country || !city) {
    return res.send('<p class="text-xs text-slate-400 italic">Select a target location.</p>');
  }

  // Handle both .js and .ts layouts safely by checking for either extension
  let cityFilePath = path.join(countriesDir, country.toLowerCase().trim(), `${city.toLowerCase().trim()}.js`);
  if (!fs.existsSync(cityFilePath)) {
    cityFilePath = path.join(countriesDir, country.toLowerCase().trim(), `${city.toLowerCase().trim()}.ts`);
  }

  if (!fs.existsSync(cityFilePath)) {
    return res.status(404).send('<p class="text-xs text-red-500">City location registry unresolvable.</p>');
  }

  // Clear module cache for development hot-reloading
  delete require.cache[require.resolve(cityFilePath)];
  const cityData = require(cityFilePath);

  if (mode === 'stay') {
    const stays = cityData.stayOptions || [];
    let html = '<div id="stay-options-section" class="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">';
    
    stays.forEach(stay => {
      const wifiBadge = stay.verifiedWifi ? '<span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded border border-emerald-200">WIFI VERIFIED</span>' : '';
      const amenities = Array.isArray(stay.amenities) ? stay.amenities : [];
      const starsCount = Math.max(1, Math.min(5, parseInt(stay.priceTier) || 1));
      
      html += `
        <div class="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2">
              <h3 class="font-bold text-slate-800 text-sm">🏨 ${stay.name || 'Stay Option'}</h3>
              ${wifiBadge}
            </div>
            <p class="text-[11px] text-slate-400 font-medium uppercase tracking-wide mt-1">Tone: ${stay.socialTone || 'Balanced'}</p>
            <div class="flex flex-wrap gap-1 mt-2">
              ${amenities.map(a => `<span class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-medium rounded">${a}</span>`).join('')}
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 text-xs font-black text-indigo-600">PRICE TIER: ${'★'.repeat(starsCount)}</div>
        </div>
      `;
    });

    html += '</div>';
    res.send(stays.length ? html : '<p class="text-xs text-slate-400 italic">No stay profiles verified for this city.</p>');
  } else {
    const strategy = cityData.foodStrategy || {};
    
    // Safely render any key structure (supports either raw strings or object blocks)
    const renderMealBlock = (mealData) => {
      if (!mealData) return 'N/A';
      if (typeof mealData === 'string') return mealData;
      
      return `
        <p class="text-xs font-bold text-slate-800 mt-1">${mealData.bestValue || 'N/A'}</p>
        <p class="text-[11px] text-slate-500 mt-0.5 italic">Cheapest: ${mealData.cheapest || 'N/A'}</p>
      `;
    };

    res.send(`
      <div id="food-strategy-section" class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-fadeIn">
        <div class="p-4 bg-slate-50 border-b border-slate-200">
          <h3 class="font-bold text-slate-800 text-sm flex items-center gap-1.5"><span>🍽️</span> Local Meals & Sourcing Strategy</h3>
        </div>
        <div class="p-5 space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Breakfast</span>
              ${renderMealBlock(strategy.breakfast)}
            </div>
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Lunch</span>
              ${renderMealBlock(strategy.lunch)}
            </div>
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Dinner</span>
              ${renderMealBlock(strategy.dinner)}
            </div>
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Dessert & Sweets</span>
              ${renderMealBlock(strategy.dessert)}
            </div>
          </div>
          ${strategy.healthyCheap ? `
            <div class="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 flex gap-2 items-start">
              <span class="text-sm">🌱</span>
              <div>
                <span class="text-[10px] font-black text-emerald-800 uppercase tracking-wider block">Budget Nutrition Strategy</span>
                <p class="text-xs font-medium text-slate-700 mt-1">${strategy.healthyCheap}</p>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `);
  }
});

module.exports = router;
