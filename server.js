// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// =========================================================
// 1. STATIC ASSET SCRIPTS & FRAMEWORKS
// =========================================================
app.get('/htmx.min.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, 'htmx.min.js'));
});

// Serve styles and static content cleanly
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static(__dirname));

// ==========================================
// 2. DYNAMIC ROUTERS & PARTIAL ENDPOINTS
// ==========================================
app.use('/partials/transportation', require('./pages/logistics/transportation.js'));
app.use('/partials/accommodation', require('./pages/accommodation/index'));
app.use('/partials/resonance', require('./pages/resonance/index'));
app.use('/partials/packing', require('./pages/packing/index'));

const logisticsRouter = require('./pages/logistics/index');
app.use('/api/logistics', logisticsRouter);

// ==========================================
// 3. EXPLICIT CORE PAGE Handlers
// ==========================================
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// server.js (Inside your app.get('/transportation') handler)
app.get('/transportation', (req, res) => {
  try {
    const manifestPath = path.join(__dirname, 'data', 'manifest.json');
    const parsedManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    const COUNTRY_REGISTRY = parsedManifest.countries || [];

    const generatedOptions = COUNTRY_REGISTRY.map(country => {
      const countryValue = (country.slug || country.id || '').toLowerCase().trim();
      const countryName = country.name || '';
      const countryIcon = country.icon || '📍';
      // Default Argentina onto the view layout
      const isArgentinaDefault = countryValue === 'argentina';
      
      return `<option value="${countryValue}" ${isArgentinaDefault ? 'selected' : ''}>${countryIcon} ${countryName}</option>`;
    }).join('\n');

    // Read your inner layout fragment shell file from disk
    const fragmentPath = path.join(__dirname, 'pages/logistics', 'transportation.html');
    let baseShell = fs.readFileSync(fragmentPath, 'utf-8');

    // Cleanly swap out tokens into the markup shell wrapper
    baseShell = baseShell.replace('{{COUNTRY_OPTIONS}}', generatedOptions);

    return res.send(baseShell);
  } catch (err) {
    console.error("Failed to compile layout wrapper:", err);
    res.status(500).send('<p class="text-xs text-red-400">Internal Server Error.</p>');
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

// ==========================================
// 4. INIT LISTEN RUNTIME
// ==========================================
app.listen(PORT, () => {
  console.log(`🚀 EchoGlaze running at http://localhost:${PORT}`);
});
