// pages/accommodation/index.js
  function fetchAccommodationCity(selectEl) {
    const citySlug = selectEl.value;
    selectEl.setAttribute('hx-get', `/partials/cities/${citySlug}.html`);
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
        opt.classList.remove('d-none');
        if (!firstMatch) firstMatch = opt;
      } else {
        opt.classList.add('d-none');
      }
    }

    if (firstMatch) {
      citySelect.value = firstMatch.value;
      fetchAccommodationCity(citySelect);
    }
  }

  function switchAccMode(mode) {
    const stayBtn = document.getElementById('btn-mode-stay');
    const foodBtn = document.getElementById('btn-mode-food');
    const contentArea = document.getElementById('accommodation-content');

    if (mode === 'stay') {
      stayBtn.className = "px-3 py-1 rounded-lg text-sm font-bold bg-indigo-600 text-white";
      foodBtn.className = "px-3 py-1 rounded-lg text-sm font-bold bg-slate-100 text-slate-600";
      contentArea.setAttribute('hx-select', '#stay-options-section');
    } else {
      foodBtn.className = "px-3 py-1 rounded-lg text-sm font-bold bg-indigo-600 text-white";
      stayBtn.className = "px-3 py-1 rounded-lg text-sm font-bold bg-slate-100 text-slate-600";
      contentArea.setAttribute('hx-select', '#food-strategy-section');
    }
    htmx.trigger(contentArea, 'load');
  }