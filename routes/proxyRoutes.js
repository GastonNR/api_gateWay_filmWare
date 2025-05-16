const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

module.exports = (app)=>{
    app.use(cors());
    app.use('/login_registro', createProxyMiddleware({
        target: process.env.LOGIN_SERVICIO,
        changeOrigin: true,
        pathRewrite: {
            '^/login_registro': ''
        }
    }));

    app.use('/buscar_peliculas', createProxyMiddleware({
        target: process.env.BUSCAR_PELICULAS_SERVICIO,
        changeOrigin: true,
        pathRewrite: {
            '^/buscar_peliculas': ''
        }
    }));

    app.use('/gestionar_peliculas', createProxyMiddleware({
        target: process.env.GESTIONAR_PELICULAS_SERVICIO,
        changeOrigin: true,
        pathRewrite: {
            '^/gestionar_peliculas': ''
        }
    }));
    app.use('/pagos', createProxyMiddleware({
        target: process.env.PAGOS_SERVICIO,
        changeOrigin: true,
        pathRewrite: {
            '^/pagos': ''
        }
    }));
}