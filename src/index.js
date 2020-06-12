const express = require("express")

const users = require("./Controllers/users")
const globalMiddleware = require("./Controllers/globalMiddleware")
const middlewareUser = require("./Controllers/middlewareUser")

const server = express()

server.use(express.json())

server.use(globalMiddleware)

server.get("/users", users.list)
server.get("/users/:index", users.unique)
server.post("/users", middlewareUser, users.create)
server.put(
  "/users/:index",
  middlewareUser,
  users.checkUserInArray,
  users.change
)
server.delete("/users/:index", users.checkUserInArray, users.delete)

server.listen(3000)
