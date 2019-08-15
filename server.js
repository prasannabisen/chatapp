const express=require('express')
const app=express()

const http=require('http')
const socket=require('socket.io')

const server=http.createServer(app)
const io=socket(server)

app.use(express.static(__dirname+'/clint_side'))

io.on('connection',function(socket){
    console.log('socket id '+socket.id)
    socket.on('chat',function(data){
        console.log('message:-'+ data.message)
    })
})

server.listen(3000,()=>{
    console.log('connected')
})