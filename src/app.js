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

  let newTweet =
  {
    username: "",
    avatar: "",
    tweet: ""
  }

  if (!request.headers.user || !request.body.tweet || typeof request.body.tweet !== 'string') {
    return response.status(401).send('Unauthorized')
  }

  if (!users.some(({ username }) => username === request.headers.user)) {
    return response.status(401).send('Unauthorized')
  }

  newTweet.username = request.headers.user
  newTweet.avatar = users[users.length - 1].avatar
  newTweet.tweet = request.body.tweet

  tweets.push(newTweet)
  response.status(201).send('OK')
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