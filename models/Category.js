const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    //! What's the difference with: 
    //! Category.hasMany(Category) or as suggested by Copilot: 
    //! Category.hasMany(Category, { as: 'children', foreignKey: 'parent_id' });
    parent_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Categories',
            key: 'id'
        }
    }
}, {
    tableName: 'Categories',
});

async function categoriesTableSync() {
    try {
        await Category.sync({ alter: true });
        console.log('The table for the Category model was just (re)created!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = Category;