/* pages/logistic/index.js */
const express = require('express');
const path = require('path');
const fs = require('fs');

// Project Root Directory (HTMXEchoGlaze)
const ROOT_DIR = path.resolve(__dirname, '../../');

// Load Country Data Helpers from /loaders/country.js
const { loadCountry, loadCountries, COUNTRY_REGISTRY } = require(path.join(ROOT_DIR, 'loaders/country'));

const app = express();
const PORT = 3000;

// Serve static assets from project root and handle missing extensions
app.use(express.static(ROOT_DIR));

// Explicit fallback route for component partials requested by HTMX
app.get('/components/:name', (req, res) => {
  const componentName = req.params.name.replace('.html', '');
  const filePath = path.join(ROOT_DIR, 'components', `${componentName}.html`);
  
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  
  console.error(`[404] Component partial not found: ${filePath}`);
  res.status(404).send('Component not found');
});

// Automatically resolve requests missing the .html extension for components
app.use((req, res, next) => {
  if (req.path.startsWith('/components/') && !path.extname(req.path)) {
    const filePath = path.join(ROOT_DIR, req.path + '.html');
    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath);
    }
  }
  next();
});

// Redirect root domain directly to the Logistics page
app.get('/', (req, res) => {
  res.redirect('/pages/logistics/index.html');
});

// 1. Compare All View Endpoint
app.get('/api/logistics/compare-all', (req, res) => {
  const templatePath = path.join(ROOT_DIR, 'components/logistics/compare-all.html');
  
  if (!fs.existsSync(templatePath)) {
    console.error(`[404] Template missing at: ${templatePath}`);
    return res.status(404).send('Compare-all partial not found');
  }

  let html = fs.readFileSync(templatePath, 'utf8');
  const countries = loadCountries();

  // Generate HTML cards for Argentina and Azerbaijan
  const cardsHtml = countries.map(c => `
    <button 
      hx-get="/api/logistics/country?country=${c.slug || c.id.toLowerCase()}"
      hx-target="#logistics-content"
      class="group p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 transition-all text-left"
    >
      <div class="flex justify-between items-start mb-3">
        <span class="text-2xl">${c.id === 'ARG' ? '🇦🇷' : '🇦🇿'}</span>
        <span class="text-[9px] font-black uppercase tracking-tighter text-slate-400 bg-slate-100 px-2 py-1 rounded">${c.id}</span>
      </div>
      <h3 class="font-black text-slate-900 group-hover:text-indigo-600 transition-colors">${c.name}</h3>
      <div class="mt-4 space-y-1.5 text-[10px]">
        <div class="flex justify-between">
          <span class="text-slate-400 uppercase">Nomad Visa</span>
          <span class="font-bold text-slate-700">${c.travelReadiness?.visa?.nomadVisa?.available ? c.travelReadiness.visa.nomadVisa.durationMonths + ' Months' : 'None'}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-400 uppercase">Visa-Free Stay</span>
          <span class="font-bold text-slate-700">${c.travelReadiness?.visa?.touristStayDays || 0} Days</span>
        </div>
      </div>
    </button>
  `).join('');

  html = html.replace('{{COMPARISON_GRID}}', cardsHtml);
  res.send(html);
});

// 2. Single Country View Endpoint
app.get('/api/logistics/country', (req, res) => {
  const countryParam = req.query.country || 'argentina';
  const country = loadCountry(countryParam);
  const templatePath = path.join(ROOT_DIR, 'components/logistics/country-view.html');

  if (!country || !fs.existsSync(templatePath)) {
    console.error(`[404] Data or template missing for country "${countryParam}" at path: ${templatePath}`);
    return res.status(404).send('Country data or template not found');
  }

  let html = fs.readFileSync(templatePath, 'utf8');
  const readiness = country.travelReadiness;

  // Build select dropdown options dynamically
  const dropdownOptions = COUNTRY_REGISTRY.map(c => 
    `<option value="${c.slug}" ${c.slug === countryParam.toLowerCase() || c.id.toLowerCase() === countryParam.toLowerCase() ? 'selected' : ''}>${c.data.name}</option>`
  ).join('');

// Inside app.get('/api/logistics/country', ...)
html = html
  .replace('{{COUNTRY_OPTIONS}}', dropdownOptions)
  .replace('{{COUNTRY_ICON}}', country.icon)
  .replace('{{REGION}}', country.region)
  .replace('{{WORK_POLICY}}', readiness?.visa?.workPolicy || 'Standard tourist provisions')
  .replace('{{REGISTRATION}}', readiness?.visa?.registrationAfterDays > 0 ? `Required after ${readiness.visa.registrationAfterDays} days` : 'No registration required');
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`🚀 EchoGlaze HTMX Server running at http://localhost:${PORT}`);
  console.log(`📁 Root Path Resolved: ${ROOT_DIR}`);
});