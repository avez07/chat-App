import  express from "express";
import { Server } from "socket.io";
import http from "http";
import path from "path";

const app = express();
const server = http.createServer(app)
const io = new Server(server);


io.on('connection',(sorket)=>{
    sorket.on('user-message',(message)=>{
        io.emit('message',message)
    })
})
app.use(express.static(path.resolve('./public')))
app.get('/',(req,res)=>{
    return res.sendFile('/public/index.html')
})

server.listen(5000,()=>
    console.log('port is connected')
)