const users = ["Eduardo", "Melissa", "Lucas", "Gabriel", "Lúcia", "Victor"]
module.exports = {
  list(req, res) {
    return res.json(users)
  },
  unique(req, res) {
    const { index } = req.params
    return res.json(users[index])
  },
  create(req, res) {
    const { name } = req.body
    users.push(name)
    return res.json(users)
  },
  change(req, res) {
    const { index } = req.params
    const { name } = req.body
    users[index] = name
    return res.json(users[index])
  },
  delete(req, res) {
    const { index } = req.params
    users.splice(index, 1)
    return res.json()
  },

  checkUserInArray(req, res, next) {
    const { index } = req.params
    if (!users[index]) {
      return res.status(400).json({ error: "User not found" })
    }
    return next()
  },
}
