const socket = io();
socket.on("message", (data) => {
  console.log("receiving message", data);
});

const btn = document.getElementById("send");
const input = document.getElementById("message");
const ul = document.getElementById("list");
const grpBtn = document.getElementById("createGrp");
const joinBtn = document.getElementById("joinGrp");
const stg = document.getElementById("stg");
const leave = document.getElementById("leave");

btn.addEventListener("click", () => {
  console.log("clicked", input.value);
  const value = input.value;
  const div = document.createElement("div");
  div.setAttribute("class", "sender");
  const li = document.createElement("li");
  li.innerText = value;
  const para = document.createElement("p");
  para.innerText = "Sender";
  div.appendChild(para);
  div.appendChild(li);
  ul.appendChild(div);
  socket.emit("message", value);
  input.value = "";
});

socket.on("broadcast", (data) => {
  console.log("broadcasted message", data);
  const div = document.createElement("div");
  div.setAttribute("class", "receiver");
  const li = document.createElement("li");
  li.innerText = data;
  const para = document.createElement("p");
  para.innerText = "Receiver";
  div.appendChild(para);
  div.appendChild(li);
  ul.appendChild(div);
});

grpBtn.addEventListener("click", () => {
  console.log("created group");
  socket.emit("create_grp", Math.random(0, 1) * 1000);
});

joinBtn.addEventListener("click", () => {
  console.log("joined group");
  socket.emit("join_room");
});

stg.addEventListener("click", () => {
  const value = input.value;
  if (value) {
    socket.emit("grp message", value);
  }
});

socket.on("serv_grp_message", (data) => {
  console.log("group message", data);
});

leave.addEventListener("click", () => {
  console.log("left group");
  socket.emit("leave");
});
