const url = require('url');

// URL string
const address = 'https://www.example.com:8080/path/page?name=meghana&age=20';

const parsedUrl = new URL(address);
console.log("Full URL:", parsedUrl.href);
console.log("Protocol:", parsedUrl.protocol);
console.log("Host:", parsedUrl.host);
console.log("Hostname:", parsedUrl.hostname);
console.log("Port:", parsedUrl.port);
console.log("Pathname:", parsedUrl.pathname);
console.log("Search:", parsedUrl.search);
console.log("Query name:", parsedUrl.searchParams.get('name'));
console.log("Query age:", parsedUrl.searchParams.get('age'));



