import express from 'express'

const server = express()
const PORT = 5000


server.listen(PORT, () => {
  console.log('Helooo')
})

server.get("/hello", (request, response) => {
    response.send(`Meu primeiro servidor!`)
  })