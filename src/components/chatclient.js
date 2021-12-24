import React from "react"
import io from "socket.io-client";
import "bootstrap/dist/css/bootstrap.css";
import "./../style/chatclient.css";
import reactDom from "react";
import { useEffect,useState } from "react";
import moment from "moment";

const socket=io("https://localhost:3000",{
    transports:["websocket","polling"]
});
function chat(){
    return(
        const [users,setusers]=useState([]);
        const [message,setMessage]=useState("");
        const [messages,setMessages]=useState([]);

        useEffect(()=>{
            socket.on("connect",()=>{
                socket.emit("username",username);
            });
            socket.on("users",users=>{
                setusers(users);
            });
        });
    );
}
export default chat;