import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("ws://localhost:3000");

export default function App() {
  const [data, setData] = useState("");
  const [isJoined, setJoined] = useState(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("client da ket noi");
    });
    socket.on("disconnect", () => {
      console.log("client dang dong ket noi");
    });
    socket.on("new-data", (data) => {
      setData(data);
    });
    socket.on("joined-room", () => {
      setJoined(true)
    })
    socket.on("leaved-room", () => {
      setJoined(false)
    })
  }, []);
  const handleClick = () => {
    socket.emit("load-data", "hello anh em");
  };
  const handleJoinRoom = () => {
    if (isJoined) {
      socket.emit("leave-room", "F9-K16")
    }else {
      socket.emit("join-room", "F9-K16")
    }
  }
  return (
    <div>
      <h1>Websocket</h1>
      <h2>{data}</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleJoinRoom}>{isJoined ? "leave" : "join"} Room</button>
    </div>
  );
}

//http Polling --> http long polling =

//emit: gửi
//on: nghe

//dự án phổ biến của websocket: tính năng chat

//Tính năng join:
//- Khi Join room --> Emit lên server socket --> join --> Trả về trạng thái cho client --> cập nhật state