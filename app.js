const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send(`
    <h2>Login Page</h2>
    <form method="POST" action="/login">
      <input type="text" name="username" placeholder="Username" required /><br><br>
      <input type="password" name="password" placeholder="Password" required /><br><br>
      <button type="submit">Login</button>
    </form>
  `)
})
app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  if (username === 'admin' && password === '1234') {
    res.send(`<h2>Login Successful ✅</h2><p>Welcome ${username}</p>`)
  } else {
    res.send(`<h2>Login Failed ❌</h2><p>Invalid credentials</p><a href="/">Try Again</a>`)
  }
})

app.listen(port, () => {
  console.log(`Login App running at http://localhost:${port}`)
})
