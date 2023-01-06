import express from 'express'

const server = express()
server.use(express.json())
const PORT = 5000

let users = []

server.listen(PORT, () => {
  console.log('Helooo')
})

server.get("/tweets", (request, response) => {
  console.log("get tweets")
  response.send(users)
})

server.post('/pessoas', (req, res) => {
  const pessoa = req.body
  users.push(pessoa)
  res.send(pessoa)
});