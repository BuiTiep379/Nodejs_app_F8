class NewsController {
    index(req, res, next) {
        res.render('news');
    }
    show(req, res, next) {
        res.send('New Detail');
    }
}

module.exports = new NewsController();
