const express=require('express')
const app=express()

const http=require('http')
const socket=require('socket.io')

const server=http.createServer(app)

app.use(express.static(__dirname+'/clint_side'))



server.listen(3000,()=>{
    console.log('connected')
})