//this file setup proxy from create-react-app 2.0

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/*', {
        target: 'http://[::1]:5000',
        secure: false,
        changeOrigin: true
    }));
};