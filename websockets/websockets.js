const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
app.use(express.static("public"));
let room;

// this io is responsible for handling all the socket connections
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  //   socket.emit("message", "message from server");
  //   setInterval(() => {
  //     socket.emit("message", "message from server" + new Date().getTime());
  //   }, 2000);

  // message event is fired when the client sends a message
  socket.on("message", (data) => {
    socket.broadcast.emit("broadcast", data);
  });

  socket.on("create_grp", (roomId) => {
    console.log("grp is created");
    room = roomId;
    socket.join(room);
  });

  socket.on("join_room", () => {
    console.log(socket.id + " joined room ", room);
    socket.join(room);
  });

  socket.on("grp message", function (data) {
    socket.to(room).emit("serv_grp_message", data);
  });

  socket.on("leave", () => {
    socket.leave(room);
    console.log(socket.id + " left room ", room);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected " + socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen("3000", () => {
  console.log("Server is running on port 3000");
});
