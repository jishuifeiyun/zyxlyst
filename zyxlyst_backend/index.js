const express = require('express')
require('module-alias/register')

const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// 中间件
app.use(cors())
app.use(bodyParser.json())

// 路由挂载
app.use('/api/login', require('@router/accManage/logIn'))
app.use('/api/file/upload_file', require('@/router/file/upload'))
app.use('/api/accManage/test', require('@router/accManage/test'))

// 启动
app.listen(3000, () => {
  console.log('后端运行在 http://localhost:3000')
})
