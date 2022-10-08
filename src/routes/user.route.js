const express = require("express")
const { createUser, getUser } = require("../usecases/user.usecase")

const router = express.Router()

router.post("/", async (request, response) => {
  const { body } = request

  try {
    const user = await createUser(body)
    response.status(201)
    response.json({
      success: true,
      data: user
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }


})


router.get("/:id", async (request, response) => {

  const { params } = request
  try {
    const user = await getUser(params.id)
    response.json({
      success: true,
      data: user
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