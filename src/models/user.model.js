const mongoose = require("mongoose")

// Schema -> Documento
// Para hacer un modelo -> Coleccion

const userSchema = new mongoose.Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  name: {
    type: String
  }
})

module.exports = mongoose.model("User", userSchema)