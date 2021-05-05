const express = require('express');
const router = express.Router();
// lấy controller
const newsController = require('../app/controller/NewsController');
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
