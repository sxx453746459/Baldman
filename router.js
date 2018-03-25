//加载 express
const express = require('express')


//加载所有的处理函数模块
const index = require('./controllers/index')
const index = require('./controllers/topic')
const user = require('./controllers/user')


//1.调用 express.Router() 创建一个路由实例
const router = express.Router() 


//2.配置路由规则

//首页路由
router
    .get('/' , index.showIndex)

//用户路由
router
    .get('/signin',user.showSignin)
    .post('/signin',user.signin)
    .get('/signup',user.showSignup)
    .post('/signup',user.signup)
    .post('/signout',user.signout)

//3.导出路由对象
module.exports = router 
//4.在app.js中通过 app.use(路由对象) 挂载使之生效