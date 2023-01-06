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

  res.send(tweets)
  tweets.reverse()
})

server.post('/tweets', (req, res) => {
  const tweet =
  {
    username: "",
    avatar: "",
    tweet: ""
  }

  tweet.username = req.body.username
  tweet.avatar = users[users.length - 1].avatar
  tweet.tweet = req.body.tweet

  tweets.push(tweet);
  res.send("Post");
})

server.post('/sign-up', (req, res) => {
  const people = req.body
  users.push(people)
  res.send(people)

  //res.send("Save info")
})