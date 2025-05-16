// Este código define una ruta para el servicio de pagos.
// y utiliza el middleware http-proxy-middleware para redirigir las solicitudes a la URL del servicio correspondiente.

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

app.use('/pagos', createProxyMiddleware({
    target: process.env.PAGOS_SERVICIO,
    changeOrigin: true,
    pathRewrite: {
        '^/pagos': ''
    }
}));

module.exports = router;
