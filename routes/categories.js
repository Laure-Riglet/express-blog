const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

/* GET home page. */
router.get('/categories', function (req, res, next) {
    res.render('categories', { title: 'Categories', categories: CategoryController.index() });
});

module.exports = router;
