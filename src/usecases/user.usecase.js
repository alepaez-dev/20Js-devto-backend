const User = require("../models/user.model")


const createUser = (body) => {
  const user = User.create(body)
  return user
}

const getUser = (id) => {
  const user = User.findById(id)
  return user
}

module.exports = {
  createUser,
  getUser
}