// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static assets from the root directory
app.use(express.static(__dirname));

// Route 1: Serve the root homepage (redirects or serves index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route 2: Component resolver for layout partials requested by HTMX
app.get('/components/:name', (req, res) => {
  const componentName = req.params.name.replace('.html', '');
  const filePath = path.join(__dirname, 'components', `${componentName}.html`);
  
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  res.status(404).send('Component partial not found');
});

// Route 3: Mount the Logistics Router from its dedicated file
const logisticsRouter = require('./pages/logistics/index');
app.use('/api/logistics', logisticsRouter);

// (Future pages can be mounted here similarly as you convert them, e.g.:)
// app.use('/api/accommodation', require('./pages/accommodation/index'));

app.listen(PORT, () => {
  console.log(`🚀 EchoGlaze running at http://localhost:${PORT}`);
});