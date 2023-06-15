// console.log('Hello World!');

// const fs = require('fs')
// fs.writeFileSync('hello.txt', 'hello world!')

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Manas')
})

server.listen(4000)