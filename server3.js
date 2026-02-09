const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to my first Express App 🚀')
})

app.get('/about', (req, res) => {
  res.send('This is a simple Node.js + Express application')
})

app.get('/contact', (req, res) => {
  res.send('Contact us at: support@example.com')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

