const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('This is Home page of our website.')
    }
    if (req.url === '/about') {
        res.end('This is About page of our website.')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We can't Find the page you looking for.</p>
        <a href='/'>Back Home</a>
        `)
})
server.listen(3000);