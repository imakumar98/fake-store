const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to the fake store')
})

app.get('/about-us', (req, res) => {
    res.send('This is about us of fake store')
})

app.listen(port, () => {
  console.log(`Fake store app listening on port ${port}`)
})