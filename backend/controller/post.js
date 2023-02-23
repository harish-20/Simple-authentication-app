const Post = require('../models/post')

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.status(200).send(posts)
  } catch (error) {
    res.status(400).send(error.message || error)
  }
}

const addPost = async (req, res) => {
  try {
    const { name, heading, text } = req.body

    const post = new Post({
      name,
      heading,
      text,
    })
    const result = await post.save()

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message || error)
  }
}

module.exports = {
  getAllPosts,
  addPost,
}
