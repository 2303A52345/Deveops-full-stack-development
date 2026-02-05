const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write(`
    <h2>URL Built-in Module Output</h2>
    <p><b>Full URL:</b> ${parsedUrl.href}</p>
    <p><b>Pathname:</b> ${parsedUrl.pathname}</p>
    <p><b>Name:</b> ${parsedUrl.searchParams.get('name')}</p>
    <p><b>Age:</b> ${parsedUrl.searchParams.get('age')}</p>
  `);

  res.end();
});

server.listen(8080, () => {
  console.log("Server running...");
});
