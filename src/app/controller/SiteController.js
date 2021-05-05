const User = require('../model/users');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        User.find({})
            .then((users) =>
                res.render('home', {
                    users: multipleMongooseToObject(users),
                }),
            )
            .catch(next);
    }
    search(req, res, next) {
        res.render('search');
    }
    admin(req, res, next) {
        res.render('admin');
    }
}

module.exports = new SiteController();
