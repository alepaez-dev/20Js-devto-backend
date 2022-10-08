const mongoose = require("mongoose")

// Schema -> Documento
// Para hacer un modelo -> Coleccion

const postSchema = new mongoose.Schema({
  userId: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  likes: [
    {
      userId: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  tags: [String]
})

module.exports = mongoose.model("Post", postSchema)