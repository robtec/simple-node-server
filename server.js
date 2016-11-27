var express = require('express')
var app = express()

const commandLineArgs = require('command-line-args')

const optionDefinitions = [
    { name: 'port', alias: 'p', type: Number, defaultValue: 8080 }
  ]

const options = commandLineArgs(optionDefinitions)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(options.port, function () {
  console.log('Example app listening on port ' + options.port)
})
