const socket=io()
const input=document.getElementById('input')
const btn=document.getElementById('button')

console.log(input)

btn.addEventListener('click',function(){
    socket.emit('chat',{
        message:input.value
    })
})