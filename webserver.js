var express = require("express")
var app = express()
const path = require("path")
var execPHP = require("./execphp.js")()

execPHP.phpFolder = "./www"

app.use("*.php", function (request, response, next) {
  execPHP.parseFile(request.originalUrl, function (phpResult) {
    response.write(phpResult)
    response.end()
  })
})
app.use("/", express.static(path.join(__dirname, "www")))
app.listen(3000, function () {
  console.log("Node server listening on port 3000!")
})
