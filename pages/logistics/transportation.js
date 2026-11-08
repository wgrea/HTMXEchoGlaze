// pages/logistics/transportation.js
    function loadTransportData(slug) {
      htmx.ajax('GET', `../../partials/transportation/countries/${slug}.html`, {
        target: '#transport-data-target',
        select: '#transportation-section',
        swap: 'innerHTML'
      });
    }

    // Auto-load Argentina on first render
    document.addEventListener('DOMContentLoaded', () => {
      loadTransportData('argentina');
    });