const port = 3003

const bodyParser = require('body-parser') // serve para fazer interpretação do corpo no browser
const express = require('express') // Framework geral que faz isso
const server = express()
const allowCors = require('./cors') //segurança navegador
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))// urlencoded é o formato do url frontend
server.use(bodyParser.json()) // interpreta se é json e transforma e um objeto para ser usado 
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {
  console.log(`Api rodando na porta: ${port}.`)
})

module.exports = server
