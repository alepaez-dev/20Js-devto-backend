// Routes, middlewares
const express = require("express")
const cors = require("cors")
const routerPost = require("./routes/post.route")
const routerUser = require("./routes/user.route")

// La app que va a tener todoooo
const app = express()


// Middlewares

app.use(cors())
app.use(express.json()) // Nos parsea todo a json
app.use("/posts", routerPost)
app.use("/users", routerUser)
// Ednpoint de HOME
// Endpoint -> la ruta, el metodo
// OTro endpoint -> misma ruta, otro metodo

// Que hace el frontend -> Request, -> Peticion, -> Pedir
// Que hace el backend -> Leer la peticion(request) -> Response -> Repsonse
app.get("/", (request, response) => {
  response.json("Tu backend funciona!!!")
})

// Exportar
module.exports = app
