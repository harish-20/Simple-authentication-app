const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    res.send('no token')
    return
  }
  const token = req.headers.authorization.split(' ')[1]
  const id = jwt.verify(token, process.env.SECRETKEY, (err, verifiedJwt) => {
    if (err) {
      res.send('Invalid token')
    } else {
      res.id = verifiedJwt.id
      next()
    }
  })
}

module.exports = auth
