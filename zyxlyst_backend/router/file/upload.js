const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { username, password } = req.body
  if (username === 'admin' && password === '123456') {
    res.json({ message: '登录成功', token: 'abc123' })
  } else {
    res.status(401).json({ message: '用户名或密码错误' })
  }
})

module.exports = router
