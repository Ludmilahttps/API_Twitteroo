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

//passa os tweets
server.get("/tweets", (request, response) => {
  console.log("get tweets")
  tweets.reverse()

  if (tweets.length > 10) {
    tweets.length = 10
  }

  response.send(tweets)
  tweets.reverse()
})

//salva os tweets
server.post('/tweets', (request, response) => {
  console.log("post tweets")
  const tweet =
  {
    username: "",
    avatar: "",
    tweet: ""
  }

  tweet.username = request.body.username
  tweet.avatar = users[users.length - 1].avatar
  tweet.tweet = request.body.tweet

  if (!tweet.username || !tweet.avatar || !tweet.tweet) {
    return res.status(422).send("Unprocessable Entity")
  }

  tweets.push(tweet)
  response.send("Post")  
})

//faz login
server.post('/sign-up', (request, response) => {
  console.log("post sign-up")
  const people = request.body
  if (people === '') {
	  response.status(422).send('Unprocessable Entity')
    return;
	}
  users.push(people)
  response.sendStatus(201)
})