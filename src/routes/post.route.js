const express = require("express")
const { createPost, getPost } = require("../usecases/post.usecase")

// Router de posts
const router = express.Router()

router.post("/", async (request, response) => {
  const { body } = request

  try {
    const post = await createPost(body)
    response.status(201)
    response.json({
      success: true,
      data: post
    })
  }catch(err) {
    response.status(err || 500)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.get("/:id", async (request, response) => {

  const { params } = request
  try {
    const post = await getPost(params.id)
    response.json({
      success: true,
      data: post
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }
})



module.exports = router