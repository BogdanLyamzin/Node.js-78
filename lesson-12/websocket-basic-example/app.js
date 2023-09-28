import { WebSocketServer } from "ws";

const wsServer = new WebSocketServer({port: 5000});

const socketList = [];

wsServer.on("connection", (socket)=> {
    socketList.push(socket);
    // console.log("New frontend connected")
    setTimeout(()=> socket.send("Welcome to web-socket server"), 3000);

    socketList.forEach(item => {
        if(item !== socket) {
            item.send(`Now we have ${socketList.length} members`)
        }
    })

    socket.on("close", ()=> {
        console.log("Frontend close connection");
        const index = socketList.findIndex(item => item === socket);
        socketList.splice(index, 1);
    })
})