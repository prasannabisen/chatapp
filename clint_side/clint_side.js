const socket=io()
const input=document.getElementById('input')
const btn=document.getElementById('button')
const list=document.getElementById('list')

console.log(list)

btn.addEventListener('click',function(){
    socket.emit('chat',{
        message:input.value
    })
})

socket.on('chat1',function(data){
    list.innerHTML +='<li>'+data.message+'</li>'
})