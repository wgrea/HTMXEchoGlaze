
  let currentResonanceLevel = 'country';

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

  function updateResonanceTarget() {
    const countryVal = document.getElementById('resonance-country-select').value;
    const cityVal = document.getElementById('resonance-city-select').value;
    const contentArea = document.getElementById('resonance-content');

    let targetPath = '';
    if (currentResonanceLevel === 'country') {
      targetPath = `/partials/countries/${countryVal}.html`;
      contentArea.setAttribute('hx-select', '#resonance-section');
    } else {
      targetPath = `/partials/cities/${cityVal}.html`;
      contentArea.setAttribute('hx-select', '#city-resonance-section');
    }

    contentArea.setAttribute('hx-get', targetPath);
    htmx.process(contentArea);
    htmx.trigger(contentArea, 'load');
  }

  document.addEventListener('DOMContentLoaded', () => {
  updateResonanceTarget();
});