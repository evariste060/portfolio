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
function ReplyFeedback(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let feedback = document.getElementById('feedback').value
    let response = document.getElementById('response');
    response.innerHTML = `
    <h1 class="text-2xl font-bold text-red-600">Thank you for giving us a feedback<h1>
    Hello ${name} 
    Your feeback ${feedback} 
    Is warmly well received and we thank you for your participation for our hardwork
    toword success

    
    ` 
}
let button = document.getElementById('submit')
button.addEventListener('click',ReplyFeedback)
