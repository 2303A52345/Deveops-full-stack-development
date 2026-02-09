const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }))
let students = []
const style = `
  <style>
    body {
      background-color: #f0f8ff;
      font-family: Arial, sans-serif;
      padding: 30px;
    }
    h1, h2 {
      color: #333;
    }
    a {
      text-decoration: none;
      color: #0066cc;
      font-weight: bold;
    }
    table {
      background: white;
      border-collapse: collapse;
    }
    th {
      background-color: #4CAF50;
      color: white;
    }
    td, th {
      padding: 10px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      padding: 8px 15px;
      border: none;
      cursor: pointer;
    }
  </style>
`
app.get('/', (req, res) => {
  res.send(`
    ${style}
    <h1>Student App</h1>
    <a href="/students">View Student List</a><br><br>
    <a href="/add">Add New Student</a>
  `)
})

app.get('/students', (req, res) => {
  let rows = students.map((s, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${s.name}</td>
      <td>${s.email}</td>
      <td>${s.dob}</td>
    </tr>
  `).join('')

  res.send(`
    ${style}
    <h2>Student List</h2>
    <table border="1">
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>DOB</th>
      </tr>
      ${rows || '<tr><td colspan="4">No students added</td></tr>'}
    </table>
    <br><a href="/">Back</a>
  `)
})

app.get('/add', (req, res) => {
  res.send(`
    ${style}
    <h2>Add Student</h2>
    <form method="POST" action="/add">
      <input type="text" name="name" placeholder="Name" required><br><br>
      <input type="email" name="email" placeholder="Email" required><br><br>
      <input type="date" name="dob" required><br><br>
      <button type="submit">Add</button>
    </form>
    <br><a href="/">Back</a>
  `)
})

app.post('/add', (req, res) => {
  const { name, email, dob } = req.body
  students.push({ name, email, dob })
  res.redirect('/students')
})

app.listen(port, () => {
  console.log(`Student App running at http://localhost:${port}`)
})
