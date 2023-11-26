const sidebar = document.querySelector('.sidebar');
const btn= document.querySelector("button");


btn.addEventListener('click',(e)=>{
e.preventDefault();
sidebar.classList.toggle("hide")
})