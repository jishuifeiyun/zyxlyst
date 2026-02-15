const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const crypto = require('crypto') // 用于生成 token
const { userDB } = require('@config')

router.post('/', async (req, res) =>  {
  try{
    console.log('userDB type:', typeof userDB)
    console.log('userDB value:', userDB)

    const { username, password } = req.body

    const [rows] = await userDB.execute(
      'SELECT * FROM xing_ren_er WHERE username = ? LIMIT 1',
      [username]
    )


    // 查找用户（根据用户名）
    const user = rows[0]
    if (!user) {
      return res.status(401).json({ message: '用户名或密码错误' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash)
    if (!isPasswordValid) {
      return res.status(401).json({ message: '用户名或密码错误' })
    }

    const token = crypto.randomBytes(16).toString('hex')
    return res.status(200).json({
      message: '登录成功',
      token,
      user: { username: user.username }
    })
  } catch (error) {
    console.error('Error in login route:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
})

module.exports = router