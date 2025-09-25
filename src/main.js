import './style.css'
//humber menus
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
//submit button for feedback
let button = document.getElementById('submit')
function ReplyFeedback(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let feedback = document.getElementById('feedback').value
    let response = document.getElementById('response');
    if(name&&email&&feedback){
    response.innerHTML = `
    <div class="bg-green-500 relative rounded-lg dark:bg-blue-500 dark:text-slate-200">
    <h1 class="text-2xl font-bold text-red-600  pl-2 md:p-2">Thank you for giving us a feedback</h1>
    <p class="pl-2 md:p-2">Dear <span class="text-blue-950 italic"><em>${name}</em></span></p> 
     <p class="pl-2 md:p-2">Email address <span class="text-blue-950 italic"><em>${email}</em></span></p> 
    <p class="pl-2 md:p-2">Your feeback <span class="text-blue-950 italic">${feedback}</span></p>
    <p class="pl-2 md:p-2">Is warmly well received and we thank you for your participation to our tearm building</p>
    </div>
    ` 
    button.innerHTML = '<h1 class="text-white text-2xl">Remove</h1>'
    button.removeEventListener('click',ReplyFeedback)
    button.addEventListener('click',remove)
    }
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('feedback').value = '';
    
}
button.addEventListener('click',ReplyFeedback)
function remove(){
    let response = document.getElementById('response');
    button.innerHTML = '<h1 class="text-white text-2xl">Submit</h1>'
    response.innerHTML = ''
    button.removeEventListener('click',remove)
    button.addEventListener('click',ReplyFeedback)

}  
//dark mode
let dark = document.getElementById('dark');
let phoneDark = document.getElementById('fd')
function changeMode(){
    const element = document.querySelector('html').classList
    element.toggle('dark')
    console.log(element)
}
dark.addEventListener('click',changeMode)
phoneDark.addEventListener('click',changeMode)


