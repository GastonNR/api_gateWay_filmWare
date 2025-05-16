require('dotenv').config();
const express = require('express');
const app = express();
const proxyRoutes = require('./routes/proxyRoutes');
const cors = require('cors');

app.use(express.json());

//Agregar las rutas al proxy
proxyRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway corriendo en el puerto ${PORT}`);
});