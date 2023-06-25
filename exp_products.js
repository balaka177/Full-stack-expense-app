const Sequelize=require('sequelize');

const db=require('../util/database');

const Product=db.define('Expense',{
    cost:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    categeory:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Product;