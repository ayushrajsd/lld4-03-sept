const http = require("http");

const server = http.createServer((req, res) => {
  // handle incoming request
  res.setHeader("Content-Type", "text/html");
  //   res.write("Hello, World!");
  res.write("<html><head><title>Node Js</title></head><body>");
  res.write("<h1>Hello, World! I am node</h1>");
  res.write("</body></html>");
  res.end();
});

const port = 3300;
const host = "localhost";
server.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
