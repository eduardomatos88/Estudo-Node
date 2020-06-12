module.exports = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required" })
  }
  return next()
}
