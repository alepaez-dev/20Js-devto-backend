const Post = require("../models/post.model")
const { getUser } = require("./user.usecase")

// Accions, verbos

const createPost = (body) => {
  const post = Post.create(body)
  return post
}

const getPost = async (id) => {
  const post = await Post.findById(id)
  const user = await getUser(post.userId)
  console.log("user", user)
  const data = {
    post,
    user
  }
  return data
}

module.exports  = {
  createPost,
  getPost
}