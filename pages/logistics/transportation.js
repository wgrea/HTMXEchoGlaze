// pages/logistics/transportation.js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/render', (req, res) => {
  const countryId = (req.query.country || 'argentina')
    .toLowerCase()
    .trim();

     console.log('TRANSPORTATION ROUTE HIT');
  console.log('Country:', countryId);

  try {
    const countryModulePath = path.join(
      __dirname,
      '../../data/countries',
      countryId,
      'index.js'
    );

    console.log('================================');
    console.log('__dirname:', __dirname);
    console.log('Country:', countryId);
    console.log('Path:', countryModulePath);
    console.log('Exists:', fs.existsSync(countryModulePath));
    console.log('================================');

    if (!fs.existsSync(countryModulePath)) {
      return res.send(`
        <div class="p-8 bg-surface rounded-xl border border-dashed border-amber-500/30 text-center max-w-2xl mx-auto mt-6">
          <h3 class="text-sm font-bold text-amber-400 mb-1">
            Data Module Missing
          </h3>
          <p class="text-xs text-muted">
            File not found:
          </p>
          <code class="text-light bg-dark px-2 py-1 rounded">
            ${countryModulePath}
          </code>
        </div>
      `);
    }

    delete require.cache[require.resolve(countryModulePath)];

    const data = require(countryModulePath);

    const transportation = data.transportation;

    if (!transportation) {
      return res.send(`
        <div class="p-8 bg-surface rounded-xl border border-dashed border-amber-500/30 text-center max-w-2xl mx-auto mt-6">
          <h3 class="text-sm font-bold text-amber-500 mb-1">
            Object Structure Omitted
          </h3>
          <p class="text-xs text-muted">
            No transportation object found.
          </p>
        </div>
      `);
    }

    if (!transportation) {
      return res.send(`
        <div class="p-8 bg-surface rounded-xl border border-dashed border-amber-500/30 text-center max-w-2xl mx-auto mt-6">
          <h3 class="text-sm font-bold text-amber-500 mb-1">Object Structure Omitted</h3>
          <p class="text-xs text-muted">No transportation properties exported in data file.</p>
        </div>
      `);
    }

    // Output pure card snippets into #transportation-data-mount
    res.send(`
      <!-- Daytime Mobility -->
      <section class="bg-surface rounded-xl p-6 border border-border">
        <h2 class="text-md font-bold text-light mb-3 flex items-center gap-2">🌞 Daytime Mobility</h2>
        <div class="space-y-2 text-xs text-light">
          <p><strong class="text-muted">Default mode:</strong> ${transportation.daytime.defaultMode || 'N/A'}</p>
          <p><strong class="text-muted">Cheapest mode:</strong> ${transportation.daytime.cheapestMode || 'N/A'}</p>
          ${transportation.daytime.recommendedCard ? `<p><strong class="text-muted">Recommended card:</strong> ${transportation.daytime.recommendedCard}</p>` : ''}
        </div>
        ${transportation.daytime.notes ? `<p class="text-[11px] text-muted mt-4 pt-3 border-t border-border/40 italic">${transportation.daytime.notes}</p>` : ''}
      </section>

      <!-- Nighttime Mobility -->
      <section class="bg-surface rounded-xl p-6 border border-border">
        <h2 class="text-md font-bold text-light mb-3 flex items-center gap-2">🌙 Nighttime Mobility</h2>
        <div class="space-y-2 text-xs text-light">
          <p><strong class="text-muted">Safest mode:</strong> ${transportation.nighttime.safestMode || 'N/A'}</p>
          <p><strong class="text-muted">Recommended apps:</strong> ${Array.isArray(transportation.nighttime.recommendedApps) ? transportation.nighttime.recommendedApps.join(', ') : 'N/A'}</p>
        </div>
        ${transportation.nighttime.notes ? `<p class="text-[11px] text-muted mt-4 pt-3 border-t border-border/40 italic">${transportation.nighttime.notes}</p>` : ''}
      </section>

      <!-- Apps -->
      <section class="bg-surface rounded-xl p-6 border border-border">
        <h2 class="text-md font-bold text-light mb-3 flex items-center gap-2">📱 Recommended Apps</h2>
        <div class="space-y-2 text-xs text-light">
          <p><strong class="text-muted">Ride‑hailing:</strong> ${Array.isArray(transportation.apps.rideHailing) ? transportation.apps.rideHailing.join(', ') : 'N/A'}</p>
          <p><strong class="text-muted">Transit:</strong> ${Array.isArray(transportation.apps.transit) ? transportation.apps.transit.join(', ') : 'N/A'}</p>
          ${transportation.apps.navigation ? `<p><strong class="text-muted">Navigation:</strong> ${transportation.apps.navigation.join(', ')}</p>` : ''}
        </div>
      </section>

      <!-- Intercity Travel -->
      ${transportation.intercity ? `
        <section class="bg-surface rounded-xl p-6 border border-border">
          <h2 class="text-md font-bold text-light mb-3 flex items-center gap-2">🚆 Intercity Travel</h2>
          <div class="space-y-2 text-xs text-light">
            <p><strong class="text-muted">Cheapest:</strong> ${transportation.intercity.cheapest || 'N/A'}</p>
            <p><strong class="text-muted">Fastest:</strong> ${transportation.intercity.fastest || 'N/A'}</p>
            <p><strong class="text-muted">Recommended:</strong> ${transportation.intercity.recommended || 'N/A'}</p>
          </div>
        </section>
      ` : ''}
    `);

  } catch (err) {
    res.status(500).send(`<p class="text-xs text-red-400 p-4">❌ Error: ${err.message}</p>`);
  }
});

module.exports = router;
