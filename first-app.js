// console.log('Hello World!');

// const fs = require('fs')
// fs.writeFileSync('hello.txt', 'hello world!')

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  // if (url === "/home") {
  //   res.write("<html>");
  //   res.write("<head><title>Home</title></head>");
  //   res.write("<body><h1>Welcome home</h1></body>");
  //   res.write("</html>");
  //   res.end();
  // }
  // if (url === "/about") {
  //   res.write("<html>");
  //   res.write("<head><title>About Us</title></head>");
  //   res.write("<body><h1>Welcome to About Us page</h1></body>");
  //   res.write("</html>");
  //   res.end();
  // }
  // if (url === "/node") {
  //   res.write("<html>");
  //   res.write("<head><title>Node JS</title></head>");
  //   res.write("<body><h1>Welcome to my Node Js project</h1></body>");
  //   res.write("</html>");
  //   res.end();
  // }
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // will be fired when new chunk is ready to be read
      body.push(chunk);
    });
    req.on("end", () => {
      // will be fired when its done parsing the incoming request data
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(4000);
