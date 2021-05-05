const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    // Để route của trang home ở phía cuối
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
