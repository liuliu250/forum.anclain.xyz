const Koa = require('koa');
const {Sequelize, DataTypes} =require('sequelize');

const app = new Koa();

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database.sqlite',
})
const User = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
})

User.sync()
app.listen(3000, () => {
    console.log('Listening on port 3000');
});