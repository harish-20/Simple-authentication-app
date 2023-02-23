const auth = require('../auth')
const { signup, login } = require('../controller/auth')
const { getAllPosts, addPost } = require('../controller/post')

const router = require('express').Router()

router.post('/signup', signup)
router.post('/login', login)

router.get('/posts', auth, getAllPosts)
router.post('/posts', auth, addPost)

module.exports = router
