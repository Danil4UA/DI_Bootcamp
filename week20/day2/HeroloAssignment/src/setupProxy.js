import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://dataservice.accuweather.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Убираем /api из URL перед отправкой
            },
        })
    );
};