// pages/logistics/transportation.js
    function loadTransportData(slug) {
      // Corrected relative path from /pages/logistics/ up to root then into /partials/countries/
      htmx.ajax('GET', `../../partials/countries/${slug}.html`, {
        target: '#transport-data-target',
        select: '#transportation-section',
        swap: 'innerHTML'
      });
    }

    // Auto-load Argentina on first render
    document.addEventListener('DOMContentLoaded', () => {
      loadTransportData('argentina');
    });