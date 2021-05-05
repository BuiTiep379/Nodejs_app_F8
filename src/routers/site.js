const express = require('express');
const router = express.Router();
// lấy controller
const siteController = require('../app/controller/SiteController');
router.get('/admin', siteController.admin);
router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
