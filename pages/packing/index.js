// pages/packing/index.js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const countriesDir = path.join(__dirname, '../../data/countries');

router.get('/render', (req, res) => {
  const { country } = req.query;
  if (!country) return res.send('');

  // =========================================================
  // STATE PERSISTENCE COUPLING
  // =========================================================
  req.session.selectedCountry = country.toLowerCase().trim();

  const targetPath = path.join(countriesDir, country.toLowerCase(), 'index.js');

  if (!fs.existsSync(targetPath)) {
    return res.status(404).send('<p class="text-xs text-red-500 p-4">Packing profile dataset missing.</p>');
  }

  // Clear node cache for seamless hot reloading during development
  delete require.cache[require.resolve(targetPath)];
  const countryData = require(targetPath);
  const packing = countryData.packing || {};

  res.send(`
    <section id="packing-section" class="bg-surface p-6 rounded-xl border border-border space-y-6 animate-in fade-in duration-200">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Style Aesthetics -->
        <div class="bg-dark p-4 rounded-lg border border-border space-y-2">
          <h4 class="font-semibold text-sm flex items-center gap-2 text-primary">👔 Dress & Style Code</h4>
          <p class="text-xs text-muted leading-relaxed">${packing.clothingStyle || 'No stylistic profiles set.'}</p>
        </div>
        <!-- Airport Blueprint -->
        <div class="bg-dark p-4 rounded-lg border border-border space-y-2">
          <h4 class="font-semibold text-sm flex items-center gap-2 text-primary">✈️ Transit & Airport Uniform</h4>
          <p class="text-xs text-muted leading-relaxed">${packing.airportUniform || 'No transit guidelines recorded.'}</p>
        </div>
      </div>

      <!-- Essential Loadout Hardware Cards -->
      <div class="pt-4 border-t border-border space-y-3">
        <h4 class="font-semibold text-sm flex items-center gap-2">🛠️ Essential Hardware Loadout</h4>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${(packing.essentialGear || []).map(gear => `
            <div class="p-3 bg-dark rounded-xl border border-border flex items-center gap-2 text-xs text-light font-bold">
              <span>📦</span> ${gear}
            </div>
          `).join('') || '<p class="text-xs text-muted italic">No gear requirements listed.</p>'}
        </div>
      </div>
    </section>
  `);
});

module.exports = router;
