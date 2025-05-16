// Este código define una ruta para el servicio de login y registro
// y utiliza el middleware http-proxy-middleware para redirigir las solicitudes a la URL del servicio correspondiente.

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

router.use('/login_registro', createProxyMiddleware({
    target: process.env.LOGIN_SERVICIO,
    changeOrigin: true,
    pathRewrite: {
        '^/login_registro': ''
    }
}));

module.exports = router;
