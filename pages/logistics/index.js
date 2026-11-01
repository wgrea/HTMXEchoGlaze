// pages/logistics/index.js
    function switchMode(mode) {
      const compareView = document.getElementById('view-compare');
      const countryView = document.getElementById('view-country');
      const btnCompare = document.getElementById('btn-compare-all');
      const btnCountry = document.getElementById('btn-country-view');

      if (mode === 'compare') {
        compareView.classList.remove('hidden');
        countryView.classList.add('hidden');
        
        btnCompare.className = "flex-1 min-w-[140px] relative px-5 py-3 rounded-xl text-xs font-black tracking-widest transition-all duration-300 bg-surface text-primary shadow-md scale-100";
        btnCountry.className = "flex-1 min-w-[140px] relative px-5 py-3 rounded-xl text-xs font-black tracking-widest transition-all duration-300 text-muted hover:text-light scale-95";
      } else {
        compareView.classList.add('hidden');
        countryView.classList.remove('hidden');

        btnCountry.className = "flex-1 min-w-[140px] relative px-5 py-3 rounded-xl text-xs font-black tracking-widest transition-all duration-300 bg-surface text-primary shadow-md scale-100";
        btnCompare.className = "flex-1 min-w-[140px] relative px-5 py-3 rounded-xl text-xs font-black tracking-widest transition-all duration-300 text-muted hover:text-light scale-95";
        
        const target = document.getElementById('country-detail-target');
        if (!target.innerHTML.trim()) {
          htmx.ajax('GET', '../partials/countries/argentina.html', '#country-detail-target');
        }
      }
    }

    function loadCountryView(countrySlug) {
      document.getElementById('country-selector').value = countrySlug;
      switchMode('country');
      htmx.ajax('GET', '../partials/countries/' + countrySlug + '.html', '#country-detail-target');
    }

    function filterCompareGrid() {
      // Month selection logic hook for UI feedback
      const month = document.getElementById('month-select').value;
      console.log("Filtering grid by month selection:", month);
    }