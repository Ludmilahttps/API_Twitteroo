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

  const newTweet =
  {
    username: "",
    avatar: "",
    tweet: ""
  }

  newTweet.username = request.body.username
  newTweet.avatar = users[users.length - 1].avatar
  newTweet.tweet = request.body.tweet 

  if (!newTweet.username || !newTweet.tweet|| typeof newTweet.tweet !== 'string') {
    return response.status(401).send('Unauthorized')
  }

  const isSignedUp = users.some(({ username }) => username === newTweet.username)

  if (!isSignedUp) {
    return response.status(401).send('UNAUTHORIZED')
  }

  tweets.push(newTweet)

  response.status(201).send('OK');

  /*
  const newTweet =
  {
    username: "",
    avatar: "",
    tweet: ""
  }

  newTweet.username = request.headers.user
  newTweet.avatar = users[users.length - 1].avatar
  newTweet.tweet = request.body.tweet

	if (!users.find((user) => user.username === newTweet.username)) {
		return response.status(401).send("UNAUTHORIZED")
	}

  if (!newTweet.username || !newTweet.avatar || !newTweet.tweet || typeof newTweet.username !== 'string' || typeof newTweet.tweet !== 'string') {
    return response.status(404).send("Unprocessable Entity")
  }

  tweets.push(newTweet)
  response.sendStatus(201)*/
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