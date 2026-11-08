// pages/accommodation/index.js

let activeAccMode = 'stay';

function fetchAccommodationCity(selectEl) {
  const citySlug = selectEl.value;
  selectEl.setAttribute('hx-get', `/partials/accommodation/cities/${citySlug}.html`);
  htmx.process(selectEl);
  htmx.trigger(selectEl, 'change');
}

function filterAccommodationCities(countrySelect) {
  const selectedCountry = countrySelect.value;
  const citySelect = document.getElementById('acc-city-select');
  const options = citySelect.options;
  let firstMatch = null;

  for (let i = 0; i < options.length; i++) {
    const opt = options[i];
    if (opt.getAttribute('data-country') === selectedCountry) {
      opt.classList.remove('hidden');
      if (!firstMatch) firstMatch = opt;
    } else {
      opt.classList.add('hidden');
    }
  }

  if (firstMatch) {
    citySelect.value = firstMatch.value;
    fetchAccommodationCity(citySelect);
  }
}

function switchAccMode(mode) {
  activeAccMode = mode;
  const stayBtn = document.getElementById('btn-mode-stay');
  const foodBtn = document.getElementById('btn-mode-food');
  const staySection = document.getElementById('stay-options-section');
  const foodSection = document.getElementById('food-strategy-section');

  if (mode === 'stay') {
    stayBtn.className = "px-3 py-1 rounded-lg text-sm font-bold bg-indigo-600 text-white";
    foodBtn.className = "px-3 py-1 rounded-lg text-sm font-bold bg-slate-100 text-slate-600";
    if (staySection) staySection.classList.remove('hidden');
    if (foodSection) foodSection.classList.add('hidden');
  } else {
    foodBtn.className = "px-3 py-1 rounded-lg text-sm font-bold bg-indigo-600 text-white";
    stayBtn.className = "px-3 py-1 rounded-lg text-sm font-bold bg-slate-100 text-slate-600";
    if (foodSection) foodSection.classList.remove('hidden');
    if (staySection) staySection.classList.add('hidden');
  }
}

// Re-apply the active view mode (Stay vs Food) whenever HTMX swaps in a new city
document.body.addEventListener('htmx:afterSwap', function (evt) {
  if (evt.detail.target.id === 'accommodation-content') {
    switchAccMode(activeAccMode);
  }
});