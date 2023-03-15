const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let numTabs = 0;

io.on("connection", (socket) => {
  numTabs++;
  io.emit("numTabsUpdated", numTabs);

  socket.on("disconnect", () => {
    numTabs--;
    io.emit("numTabsUpdated", numTabs);
  });
});

server.listen(3000, () => {
  console.log("Chat server is running on 3000");
});
