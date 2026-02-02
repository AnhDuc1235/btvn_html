import { Server } from "socket.io";

const io = new Server({
  cors: "*",
});

io.on("connection", (socket) => {
  console.log("ket noi", socket.id);
  socket.on("load-data", (data) => {
    console.log(data);
    io.to("F9-K16").emit("new-data", "du lieu gui ve tu server" + Date.now());
  });
  socket.on("join-room", (room) => {
    socket.join(room);
    socket.emit("joined-room")
  })
  socket.on("leave-room", (room) => {
    socket.leave(room);
    socket.emit("leaved-room")
  })
  socket.on("disconnect", () => {
    console.log("dong ket noi", socket.id);
  });
});

io.listen(3000);

//socket.broadcast.emit: gửi cho tất cả trừ nó
//socket.emit: gửi cho chính nó
//io.emit: gửi cho tất cả
///socket.to: gửi đến nhưng không gửi cho chính nó
//io.to: gửi cho chính nó
