const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  heading: String,
  text: String,
  name: String,
})

module.exports = mongoose.model('post', postSchema)
