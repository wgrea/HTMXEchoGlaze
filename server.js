// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const { loadCountries, getCountryDropdownOptions } = require('./loaders/country');

const app = express();
const PORT = process.env.PORT || 3000;

// =========================================================
// 1. SESSION MEMORY ENGINE (Add this right above static assets)
// =========================================================
const session = require('express-session');
app.use(session({
  secret: 'echoglaze-secret-token',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 Hour state retention windows
}));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static(__dirname));


// =========================================================
// 2. DYNAMIC ROUTERS & PARTIAL ENDPOINTS
// =========================================================
app.use('/partials/transportation', require('./pages/logistics/transportation.js'));
app.use('/partials/accommodation', require('./pages/accommodation/index'));
app.use('/partials/resonance', require('./pages/resonance/index'));
app.use('/partials/packing', require('./pages/packing/index'));

const logisticsRouter = require('./pages/logistics/index');
app.use('/api/logistics', logisticsRouter);

// Global endpoint to serve uniform options lists to any selector page
app.get('/partials/global/country-options', (req, res) => {
  // Pull from session state first, then fallback to query parameter, then hard default to argentina
  const selectedCountry = req.session.selectedCountry || req.query.country || 'argentina';
  res.send(getCountryDropdownOptions(selectedCountry));
});


// =========================================================
// 3. EXPLICIT PAGE & COMPONENT HANDLERS
// =========================================================
// =========================================================
// 3. EXPLICIT PAGE & COMPONENT HANDLERS
// =========================================================
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// --- Transportation Shell Handler ---
app.get('/transportation', (req, res) => {
  try {
    const fragmentPath = path.join(__dirname, 'pages/logistics', 'transportation.html');
    if (!fs.existsSync(fragmentPath)) {
      return res.status(404).send('<p class="text-xs text-amber-500 font-mono">Missing Core System Files</p>');
    }

    // Read uniform state engine
    const activeCountry = req.session?.selectedCountry || 'argentina';
    const generatedOptions = getCountryDropdownOptions(activeCountry);
    
    let baseShell = fs.readFileSync(fragmentPath, 'utf-8');
    return res.send(baseShell.replace('{{COUNTRY_OPTIONS}}', generatedOptions));
  } catch (err) {
    res.status(500).send('<p class="text-xs text-red-400 font-mono">Layout compilation runtime crash</p>');
  }
});


// --- Accommodation Shell Handler ---
app.get('/accommodation', (req, res) => {
  try {
    const fragmentPath = path.join(__dirname, 'pages/accommodation', 'index.html');
    if (!fs.existsSync(fragmentPath)) {
      return res.status(404).send('<p class="text-xs text-amber-500 font-mono">Missing Core System Files</p>');
    }
    
    const activeCountry = req.session?.selectedCountry || 'argentina';
    const generatedOptions = getCountryDropdownOptions(activeCountry);
    
    let baseShell = fs.readFileSync(fragmentPath, 'utf-8');
    return res.send(baseShell.replace('{{COUNTRY_OPTIONS}}', generatedOptions));
  } catch (err) {
    res.status(500).send('<p class="text-xs text-red-400 font-mono">Failed to compile wrapper</p>');
  }
});

// --- Packing Shell Handler ---
app.get('/packing', (req, res) => {
  try {
    const fragmentPath = path.join(__dirname, 'pages/packing', 'index.html');
    if (!fs.existsSync(fragmentPath)) {
      return res.status(404).send('<p class="text-xs text-amber-500 font-mono">Missing Core System Files</p>');
    }
    
    const activeCountry = req.session?.selectedCountry || 'argentina';
    const generatedOptions = getCountryDropdownOptions(activeCountry);
    
    let baseShell = fs.readFileSync(fragmentPath, 'utf-8');
    return res.send(baseShell.replace('{{COUNTRY_OPTIONS}}', generatedOptions));
  } catch (err) {
    res.status(500).send('<p class="text-xs text-red-400 font-mono">Failed to compile Packing wrapper</p>');
  }
});

app.get('/components/:name', (req, res) => {
  const componentName = req.params.name.replace('.html', '');
  const filePath = path.join(__dirname, 'components', `${componentName}.html`);
  
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  res.status(404).send('Component partial not found');
});

// =========================================================
// 4. RUNTIME SETUP
// =========================================================
app.listen(PORT, () => {
  console.log(`🚀 EchoGlaze running at http://localhost:${PORT}`);
});
