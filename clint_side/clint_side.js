const socket=io()
const input=document.getElementById('input')
const btn=document.getElementById('button')
const list=document.getElementById('list')
const name=document.getElementById('name')

console.log(list)

btn.addEventListener('click',function(){
    socket.emit('chat',{
        name:name.value,
        message:input.value
    })
})

socket.on('chat1',function(data){
    list.innerHTML +=`<p><strong>`+data.name+`</strong>`+":-"+data.message+'</p>'
    input.value=''
})