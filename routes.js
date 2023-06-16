const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        `<body><h1>${data}</h1><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>`
      );
      res.write("</html>");
      return res.end();
    });
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // will be fired when new chunk is ready to be read
      body.push(chunk);
    });
    return req.on("end", () => {
      // will be fired when its done parsing the incoming request data
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = requestHandler;
