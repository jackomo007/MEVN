var express = require("express")
var bodyPaser = require("body-parser")

var tasks = require("./routes/tasks")
var cors =  require("cors")

var port = 3000

var app = express()
app.use(cors())

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({ extended: false}))

app.use("/api", tasks)

app.listen(port, function () {
    console.log('Server started on port ' + port)
})