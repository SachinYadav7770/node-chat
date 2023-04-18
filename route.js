const express = require('express');
const socket = require('socket.io');
const PORT = 7770;
const cors = require('cors');

const app = express();
app.use(cors({origin:'http://localhost:3000/'}));

app.get('/test',(req,res)=>{
    res.send('yes working');
});

const server = app.listen(PORT,()=>{
    console.log(`${PORT} port is started`);
})

const io = socket(server,{
    cors:{
        origin:'*'
    }
});
io.on('connection', socket => {
    socket.on('join_room', (data) => {
        console.log('join_room:-',data);
        socket.join(data);
    }); // join_room

    socket.on('send_message', (data) => {
        console.log('message',data);
        socket.to(data.room).emit('receive_message',data);
    }); // message
    
    socket.on('disconnect', (data) => {
        console.log('disconnected');
    }); // message
  });
