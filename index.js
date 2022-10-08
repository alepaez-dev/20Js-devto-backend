const mongoose = require("mongoose")
require("dotenv").config()


console.log("proccess env", process.env)
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env

// Url de la base de datos
const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

mongoose.connect(URL)
.then(() => {
  console.log("conexion exitosa :)")
})
.catch((error) => {
  console.log("hubo un error :)", error)
})
// Conexion a la base de datos
// Prender el servidor