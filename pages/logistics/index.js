/**
 * pages/logistics/index.js
 */

const countriesData = [
  {
    id: 'argentina',
    code: 'ARG',
    name: 'Argentina',
    flag: '🇦🇷',
    region: 'South America',
    visaType: 'tourist',
    visaLabel: 'Tourist Visa (90 Days)',
    seasons: {
      jan: '🔥 Peak', feb: '🔥 Peak', mar: '✨ Sweet', apr: '✨ Sweet',
      may: 'Neutral', jun: '💸 Cheap', jul: '💸 Cheap', aug: '💸 Cheap',
      sep: 'Neutral', oct: '✨ Sweet', nov: '✨ Sweet', dec: '🔥 Peak'
    }
  },
  {
    id: 'azerbaijan',
    code: 'AZE',
    name: 'Azerbaijan',
    flag: '🇦🇿',
    region: 'Eurasia',
    visaType: 'nomad',
    visaLabel: 'ASAN ASAN E-Visa / Nomad',
    seasons: {
      jan: '💸 Cheap', feb: '💸 Cheap', mar: '✨ Sweet', apr: '✨ Sweet',
      may: '🔥 Peak', jun: '🔥 Peak', jul: 'Hot', aug: 'Hot',
      sep: '✨ Sweet', oct: '✨ Sweet', nov: 'Neutral', dec: '💸 Cheap'
    }
  }
];

let currentMode = 'filters';
let activeMonth = 'none';
let activeVisa = 'all';

// Explicitly assign to window
window.switchMode = function(mode) {
  currentMode = mode;
  const viewCompare = document.getElementById('view-compare');
  const viewCountry = document.getElementById('view-country');
  const btnCompare = document.getElementById('btn-compare-all');
  const btnCountry = document.getElementById('btn-country-view');

  if (mode === 'filters') {
    if (viewCompare) viewCompare.classList.remove('hidden');
    if (viewCountry) viewCountry.classList.add('hidden');

    btnCompare?.classList.add('bg-surface', 'text-primary', 'shadow-md', 'scale-100');
    btnCompare?.classList.remove('text-muted', 'scale-95');

    btnCountry?.classList.add('text-muted', 'scale-95');
    btnCountry?.classList.remove('bg-surface', 'text-primary', 'shadow-md', 'scale-100');
  } else {
    if (viewCompare) viewCompare.classList.add('hidden');
    if (viewCountry) viewCountry.classList.remove('hidden');

    btnCountry?.classList.add('bg-surface', 'text-primary', 'shadow-md', 'scale-100');
    btnCountry?.classList.remove('text-muted', 'scale-95');

    btnCompare?.classList.add('text-muted', 'scale-95');
    btnCompare?.classList.remove('bg-surface', 'text-primary', 'shadow-md', 'scale-100');

    const dropdown = document.getElementById('country-dropdown');
    if (dropdown) {
      window.loadCountryView(dropdown.value);
    }
  }
};

window.handleMonthChange = function(month) {
  activeMonth = month;
  renderCompareCards();
};

window.handleVisaTypeChange = function(visa) {
  activeVisa = visa;
  renderCompareCards();
};

window.loadCountryView = function(countryKey) {
  const container = document.getElementById('country-view-content');
  if (!container) return;

  const partialUrl = `../../partials/countries/${countryKey}.html`;
  
  fetch(partialUrl)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
      if (window.htmx) {
        window.htmx.process(container);
      }
    })
    .catch(err => {
      container.innerHTML = `
        <div class="p-4 bg-dark border border-border text-muted text-xs rounded-xl">
          Could not load partial: <code>${partialUrl}</code>. Ensure Live Server is running.
        </div>`;
    });
};

function renderCompareCards() {
  const container = document.getElementById('compare-cards-container');
  if (!container) return;

  const filtered = countriesData.filter(item => {
    if (activeVisa !== 'all' && item.visaType !== activeVisa) return false;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full p-8 text-center text-muted text-xs">No matching destinations found.</div>`;
    return;
  }

  container.innerHTML = filtered.map(c => `
    <div class="bg-surface p-5 rounded-xl border border-border space-y-3 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs uppercase font-mono tracking-wider text-muted">${c.region}</span>
          <span class="text-xs font-semibold px-2 py-0.5 rounded bg-dark border border-border text-primary">${c.visaLabel}</span>
        </div>
        <h3 class="text-lg font-bold flex items-center gap-2">
          <span>${c.flag}</span> ${c.name}
        </h3>
      </div>

      <div class="pt-3 border-t border-border/50 text-xs">
        <span class="text-muted block mb-1 font-semibold uppercase text-[10px]">Season status (${activeMonth === 'none' ? 'Overview' : activeMonth.toUpperCase()}):</span>
        <span class="text-light font-bold">
          ${activeMonth === 'none' ? 'Select a month above to check weather & price tier' : (c.seasons[activeMonth] || 'N/A')}
        </span>
      </div>
    </div>
  `).join('');
}

// Initial execute on script load
renderCompareCards();