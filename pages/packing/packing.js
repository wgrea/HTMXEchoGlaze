
    function loadPackingData(countrySlug) {
      htmx.ajax('GET', '../partials/packing/' + countrySlug + '.html', {
        target: '#packing-content',
        select: '#packing-section',
        swap: 'innerHTML'
      });
    }

    // Load default country on initial render
    document.addEventListener('DOMContentLoaded', function() {
      loadPackingData('argentina');
    });