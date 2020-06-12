const express = require("express")

const users = require("./Controllers/users")

const server = express()

server.use(express.json())

server.get("/users", users.list)
server.get("/users/:index", users.unique)
server.post("/users", users.create)
server.put("/users/:index", users.change)
server.delete("/users/:index", users.delete)

server.listen(3000)
