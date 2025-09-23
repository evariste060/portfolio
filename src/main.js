import './style.css'
let open = document.getElementById('open')
let close =document.getElementById('close')
let menu = document.getElementById('menu')
open.addEventListener('click',()=>{
    close.classList.toggle('hidden');
    menu.classList.toggle('hidden')

})
close.addEventListener('click',()=>{
    close.classList.toggle('hidden');
    menu.classList.toggle('hidden');
})
console.log(close)