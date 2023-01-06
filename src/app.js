import express from 'express'
import cors from "cors"

const server = express()
server.use(express.json())
server.use(cors())
const PORT = 5000

let users = []
let tweets = []

server.listen(PORT, () => {
  console.log('Im a server')
})

server.get("/tweets", (request, response) => {
  console.log("get tweets")
  tweets.reverse()

  if (tweets.length > 10) {
    tweets.length = 10
  }

  response.send(tweets)
  tweets.reverse()
})

server.post('/tweets', (request, response) => {
  const tweet =
  {
    username: "",
    avatar: "",
    tweet: ""
  }

  tweet.username = request.body.username
  tweet.avatar = users[users.length - 1].avatar
  tweet.tweet = request.body.tweet

  tweets.push(tweet);
  response.send("Post");
})

server.post('/sign-up', (request, response) => {
  const people = request.body
  users.push(people)
  response.send(people)

  //response.send("Save info")
})