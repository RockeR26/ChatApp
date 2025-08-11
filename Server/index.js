const express = require('express');
const http= require('http');
const {Server}=require('socket.io');
const router = require ('./routes');
const cors=require("cors");



const app = express();
app.use(cors());
app.use(router);

const port = process.env.PORT||3000
const httpServer=http.createServer(app);
const io=new Server(httpServer,{  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }})


io.on('connection',(socket)=>{
  console.log("We are connected");

  socket.on('join',({name,room})=>{
    console.log(name,room);
  })

  socket.on('disconnect',()=>{
    console.log("User left!");    
  })
})



httpServer.listen(port,()=>{
  console.log(`Server is running at port:- ${port}`)
});

