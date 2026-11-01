// /pages/resonance/index.js

let currentResonanceLevel = 'country';

// Signal Lookup Table matching Svelte logic
const resonanceMatches = {
  nightlifeOverall: ['Argentina'],
  lateNightDining: ['Argentina', 'Azerbaijan'],
  drinkingCulture: ['Argentina'],
  danceScene: ['Argentina'],
  musicScene: ['Argentina', 'Azerbaijan'],
  barDensity: ['Argentina'],
  snowActivities: ['Argentina', 'Azerbaijan'],
  waterActivities: ['Azerbaijan'],
  natureAccess: ['Argentina', 'Azerbaijan'],
  safetyAtNight: ['Azerbaijan']
};

/**
 * Toggle between 'country' level and 'city' level view modes
 */
function switchResonanceLevel(level) {
  currentResonanceLevel = level;
  const countryBtn = document.getElementById('toggle-country');
  const cityBtn = document.getElementById('toggle-city');
  const citySelect = document.getElementById('resonance-city-select');

  if (level === 'country') {
    countryBtn.className = "px-3 py-1 rounded-md text-xs font-bold bg-white text-slate-800 shadow-sm";
    cityBtn.className = "px-3 py-1 rounded-md text-xs font-bold text-slate-600";
    citySelect.classList.add('d-none');
  } else {
    cityBtn.className = "px-3 py-1 rounded-md text-xs font-bold bg-white text-slate-800 shadow-sm";
    countryBtn.className = "px-3 py-1 rounded-md text-xs font-bold text-slate-600";
    citySelect.classList.remove('d-none');
  }
  
  updateResonanceTarget();
}

/**
 * Filter city options based on selected country
 */
function handleCountryChange(countrySelect) {
  const selectedCountry = countrySelect.value;
  const citySelect = document.getElementById('resonance-city-select');
  const options = citySelect.options;
  let firstMatch = null;

  for (let i = 0; i < options.length; i++) {
    const opt = options[i];
    if (opt.getAttribute('data-country') === selectedCountry) {
      opt.classList.remove('d-none');
      if (!firstMatch) firstMatch = opt;
    } else {
      opt.classList.add('d-none');
    }
  }

  if (firstMatch) {
    citySelect.value = firstMatch.value;
  }

  updateResonanceTarget();
}

/**
 * Update HTMX target path and hx-select element dynamically
 */
function updateResonanceTarget() {
  const countryVal = document.getElementById('resonance-country-select').value;
  const cityVal = document.getElementById('resonance-city-select').value;
  const contentArea = document.getElementById('resonance-content');

  if (currentResonanceLevel === 'country') {
    contentArea.setAttribute('hx-get', `/partials/countries/${countryVal}.html`);
    contentArea.setAttribute('hx-select', '#resonance-section');
  } else {
    contentArea.setAttribute('hx-get', `/partials/cities/${cityVal}.html`);
    contentArea.setAttribute('hx-select', '#city-resonance-section');
  }

  htmx.process(contentArea);
  htmx.trigger(contentArea, 'load');
}

/**
 * Render the Global Matches section for a given signal key
 */
function showGlobalMatches(signalKey, signalLabel) {
  const container = document.getElementById('global-matches-container');
  const matches = resonanceMatches[signalKey] || [];
  const displayName = signalLabel || signalKey;

  if (matches.length === 0) {
    container.innerHTML = `
      <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
        <p class="text-slate-500 italic text-xs">No other destinations match ${displayName} at 7+ intensity.</p>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="p-6 bg-blue-50/50 rounded-2xl border border-blue-200/80 shadow-sm">
      <h3 class="text-sm font-bold uppercase tracking-wider text-blue-950 mb-3 flex items-center gap-2">
        <span>🌍</span> Global Matches for <span class="italic text-blue-600">${displayName}</span>
      </h3>
      <div class="flex flex-wrap gap-2">
        ${matches.map(m => `
          <div class="px-3 py-1.5 bg-white text-slate-800 font-bold rounded-xl text-xs border border-blue-100 shadow-sm flex items-center gap-1.5">
            <span>📍</span> ${m}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Initial initialization on load
document.addEventListener('DOMContentLoaded', () => {
  updateResonanceTarget();
});