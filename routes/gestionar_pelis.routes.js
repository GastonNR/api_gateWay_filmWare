// Este código define una ruta para el servicio de gestión de películas
// y utiliza el middleware http-proxy-middleware para redirigir las solicitudes a la URL del servicio correspondiente.

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

router.use('/gestionar_peliculas', createProxyMiddleware({
        target: process.env.GESTIONAR_PELICULAS_SERVICIO,
        changeOrigin: true,
        pathRewrite: {
            '^/gestionar_peliculas': ''
        }
    }));

module.exports = router;
