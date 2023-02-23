const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 4)
    const user = new User({ name, email, password: hashedPassword })
    const result = await user.save()

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message || error)
  }
}

const login = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email })

    if (existingUser) {
      const isVerified = await bcrypt.compare(
        req.body.password,
        existingUser.password,
      )
      if (isVerified) {
        const token = jwt.sign(
          { id: existingUser._id },
          process.env.SECRETKEY,
          { expiresIn: '24h' },
        )
        res.status(200).send({ isVerified, existingUser, token })
      } else {
        res.status(400).send({ isVerified: false })
      }
    } else {
      res.status(400).send('No User Found')
    }
  } catch (error) {
    res.status(400).send(error.message || error)
  }
}

module.exports = {
  signup,
  login,
}
