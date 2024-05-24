import { Server } from "socket.io";
import http from 'http'
import express from 'express'

const app=express();

const server = http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
});

export const getReceiverSocketId = (receiverId)=>{
    return userSocket[receiverId];
}

const userSocket = {}; //userId,socketId

io.on('connection', (socket)=>{
    console.log("connection initiated",socket.id);

    const userId=socket.handshake.query.userId;

    if(userId != "undefined")
            userSocket[userId]=socket.id

    io.emit("onlineUsers",Object.keys(userSocket));

    socket.on("disconnect",()=>{
        console.log("disconnection initiated", socket.id);
        delete userSocket[userId];
        io.emit("onlineUsers",Object.keys(userSocket));

    })
})

export {app,io, server}