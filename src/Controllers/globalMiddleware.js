module.exports = (req, res, next) => {
  console.time("Request")
  console.log(`Method: ${req.method}; URL: ${req.url}`)
  next()
}
