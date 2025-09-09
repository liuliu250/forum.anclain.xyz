const express = require('express')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const { Sequelize, DataTypes } = require('sequelize')
const jsdom = require("jsdom")
const {JSDOM} = require('jsdom')
const dom = new JSDOM(`<DOCTYPE html><p>Hello world</p>`)
window = dom.window

const app1 = new Koa()
app1.use(bodyParser())

const app2 = new express()

app1.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type')
    if (ctx.method === 'OPTIONS') {
        ctx.body = 200
    } else {
        await next()
    }
})

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
})

User.sync()

app1.use(async ctx => {
    if (ctx.url === '/login' && ctx.method === 'POST') {
        const { username, password } = ctx.request.body
        const user = await User.findOne({ where: { username, password } })
        if (user) {
            ctx.body = { username: user.username }
            // app2.get('/dashboard', async (req, res) => {
            //     res.status(200).redirect('/dashboard')
            // })
            window.location.href('https://www.baidu.com')
        } else {
            ctx.body = { username: '账号密码错误' }
        }
    }
    else if (ctx.url === '/registry' && ctx.method === 'POST') {
        const { username, password } = ctx.request.body
        const user = await User.create({ username, password })
        ctx.body = { success: true }
    }
    else if (ctx.url === '/users' && ctx.method === 'GET') {
        const users = await User.findAll()
        ctx.body = { users: users.map(item => item.username) }
    }
})

app1.listen(3000, () => {
    console.log('server start port 3000')
})