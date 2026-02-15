const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

router.post('/', async (req, res) => {
  try {
    const { password } = req.body

    if (!password) {
      return res.status(400).json({ message: 'Password is required' })
    }

    const saltRounds = 10
    const hash = await bcrypt.hash(password, saltRounds)

    return res.status(200).json({
      message: 'Password hashed successfully',
      hash
    })
  } catch (error) {
    console.error('Error in hash route:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
})

module.exports = router
/*
curl -X POST http://localhost:3000/api/file/test \
  -H "Content-Type: application/json" \
  -d '{"password": "lhm081015"}'
*/