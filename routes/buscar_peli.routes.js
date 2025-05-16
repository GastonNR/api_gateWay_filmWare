// Este código define una ruta para el servicio de buscar películas
// y utiliza el middleware http-proxy-middleware para redirigir las solicitudes a la URL del servicio correspondiente.

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

router.use('/buscar_peliculas', createProxyMiddleware({
    target: process.env.BUSCAR_PELICULAS_SERVICIO,
    changeOrigin: true,
    pathRewrite: {
        '^/buscar_peliculas': ''
    }
}));

module.exports = router;
