// pages/accommodation/index.js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const countriesDir = path.join(__dirname, '../../data/countries');

// Add this modification specifically inside your router.get('/city-dropdown-options') route:

router.get('/city-dropdown-options', (req, res) => {
  const { country } = req.query;
  if (!country) return res.send('');

  const countryPath = path.join(countriesDir, country.toLowerCase());
  let optionsHtml = '';
  let isFirst = true;

  if (fs.existsSync(countryPath)) {
    const files = fs.readdirSync(countryPath);
    files.forEach(file => {
      if (file.endsWith('.js') && file !== 'index.js') {
        const citySlug = file.replace('.js', '');
        const cityName = citySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        
        // Explicitly inject the selected marker to the first available city option
        optionsHtml += `<option value="${citySlug}" ${isFirst ? 'selected' : ''}>${cityName}</option>`;
        isFirst = false;
      }
    });
  }

  res.send(optionsHtml || '<option value="">No cities found</option>');
});


// Route 2: Render stay options array or food strategy guides based on mode parameters
router.get('/render', (req, res) => {
  const { country, city, mode = 'stay' } = req.query;
  if (!country || !city) {
    return res.send('<p class="text-xs text-slate-400 italic">Select a target location.</p>');
  }

  const cityFilePath = path.join(countriesDir, country.toLowerCase(), `${city.toLowerCase()}.js`);

  if (!fs.existsSync(cityFilePath)) {
    return res.status(404).send('<p class="text-xs text-red-500">City location registry unresolvable.</p>');
  }

  // Clear module cache for development hot-reloading
  delete require.cache[require.resolve(cityFilePath)];
  const cityData = require(cityFilePath);

  if (mode === 'stay') {
    // Aligned to read cityData.stayOptions directly from data files
    const stays = cityData.stayOptions || [];
    let html = '<div id="stay-options-section" class="grid grid-cols-1 md:grid-cols-2 gap-4">';
    
    stays.forEach(stay => {
      const wifiBadge = stay.verifiedWifi ? '<span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded border border-emerald-200">WIFI VERIFIED</span>' : '';
      
      html += `
        <div class="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2">
              <h3 class="font-bold text-slate-800 text-sm">🏨 ${stay.name || 'Stay Option'}</h3>
              ${wifiBadge}
            </div>
            <p class="text-[11px] text-slate-400 font-medium uppercase tracking-wide mt-1">Tone: ${stay.socialTone || 'Balanced'}</p>
            <div class="flex flex-wrap gap-1 mt-2">
              ${(stay.amenities || []).map(a => `<span class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-medium rounded">${a}</span>`).join('')}
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 text-xs font-black text-indigo-600">PRICE TIER: ${'★'.repeat(stay.priceTier || 1)}</div>
        </div>
      `;
    });

    html += '</div>';
    res.send(stays.length ? html : '<p class="text-xs text-slate-400 italic">No stay profiles verified for this city.</p>');
  } else {
    // Aligned to map your custom breakfast, lunch, and dinner node objects
    const strategy = cityData.foodStrategy || {};
    res.send(`
      <div id="food-strategy-section" class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="p-4 bg-slate-50 border-b border-slate-200">
          <h3 class="font-bold text-slate-800 text-sm flex items-center gap-1.5"><span>🍽️</span> Local Meals & Sourcing Strategy</h3>
        </div>
        <div class="p-5 space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Breakfast</span>
              <p class="text-xs font-bold text-slate-800 mt-1">${strategy.breakfast?.bestValue || 'N/A'}</p>
              <p class="text-[11px] text-slate-500 mt-0.5 italic">Cheapest: ${strategy.breakfast?.cheapest || 'N/A'}</p>
            </div>
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Lunch</span>
              <p class="text-xs font-bold text-slate-800 mt-1">${strategy.lunch?.bestValue || 'N/A'}</p>
              <p class="text-[11px] text-slate-500 mt-0.5 italic">Cheapest: ${strategy.lunch?.cheapest || 'N/A'}</p>
            </div>
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span class="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Dinner</span>
              <p class="text-xs font-bold text-slate-800 mt-1">${strategy.dinner?.bestValue || 'N/A'}</p>
              <p class="text-[11px] text-slate-500 mt-0.5 italic">Cheapest: ${strategy.dinner?.cheapest || 'N/A'}</p>
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
