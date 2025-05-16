require('dotenv').config();
const express = require('express');
const app = express();

// Rutas
const loginRoutes = require('./routes/login.routes');
const gestionarPelisRoutes = require('./routes/gestionar_pelis.routes');
const buscarPeliRoutes = require('./routes/buscar_peli.routes');
const pagosRoutes = require('./routes/pagos.routes');

//Rutas para cada microservicio
app.use('login_registro', loginRoutes);
app.use('/gestionar_peliculas', gestionarPelisRoutes);
app.use('/buscar_peliculas', buscarPeliRoutes);
app.use('/pagos', pagosRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway corriendo en el puerto ${PORT}`);
});