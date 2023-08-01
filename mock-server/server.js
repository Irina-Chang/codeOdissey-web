const express = require("express")
const cors = require("cors")
const {v4:uuidV4} = require('uuid')

const port = 8080
const app = express()

app.use(cors({
  origin: '*'
}));

app.post("/api/v1/login", (req, res) => {
  res.status(201).send({
    "accessToken": uuidV4(),
    "refreshToken": uuidV4()
  })
})

app.post("/api/v1/refreshtoken", (req, res) => {
  res.status(201).send({
    "accessToken": uuidV4(),
    "refreshToken": uuidV4()
  })
})

app.listen(port, () => {
  console.log(`listening on ${port}` )
})