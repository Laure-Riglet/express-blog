const { DataTypes } = require('sequelize');
// const sequelize = require('../database/SequelizeOrm.sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('Post', {
    // Model attributes are defined here
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT
        // allowNull defaults to true
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Categories',
            key: 'id'
        }
    }
});

// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post); // true

async function postsTableSync() {
    try {
        await Post.sync({ alter: true });
        console.log('The table for the Post model was just (re)created!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = Post;