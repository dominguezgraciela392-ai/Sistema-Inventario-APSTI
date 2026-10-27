const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..');

app.use(express.json());

// API base: las páginas pueden comprobar que el servidor está disponible.
app.get('/api/saludo', (req, res) => {
  res.json({
    estado: 'Servidor APSTI funcionando correctamente',
    servicio: 'Sistema de Inventario APSTI',
    fecha: new Date().toISOString()
  });
});

// Punto de partida para las futuras rutas de inventario.
app.get('/api/health', (req, res) => {
  res.status(200).json({ ok: true });
});

// Conserva la estructura actual del proyecto: index.html, pages/, css/, js/ e img/.
app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Servidor APSTI ejecutándose en http://localhost:${PORT}`);
});
