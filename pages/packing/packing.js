
    function loadPackingData(countrySlug) {
      htmx.ajax('GET', '../partials/countries/' + countrySlug + '.html', {
        target: '#packing-content',
        select: '#packing-section',
        swap: 'innerHTML'
      });
    }

    // Load default country on initial render
    document.addEventListener('DOMContentLoaded', function() {
      loadPackingData('argentina');
    });