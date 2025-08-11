import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router'
import io from "socket.io-client"

const Chat = () => {
  const [name,setName]=useState("");
  const [room,setRoom]=useState("");
  const ENDPOINT="http://localhost:3000/"
  const [searchParams]=useSearchParams();
  let socket;
  useEffect(()=>{
    const {name,room} = Object.fromEntries([...searchParams]);
    socket=io(ENDPOINT);
    
    setName(name);
    setRoom(room);

    socket.emit("join",{name,room});    
    
    return ()=>{
      socket.emit("disconnect");
      socket.off();
    }

  },[ENDPOINT,searchParams])

  return (
    <div>Chat</div>
  )
}

export default Chat