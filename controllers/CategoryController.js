const Category = require('../models/Category');
const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const categories = await Category.findAll();
        return res.render('categories', { title: 'Categories', categories });
    }
}