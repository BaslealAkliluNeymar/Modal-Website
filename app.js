const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const exit =  document.querySelector('.exit')


btn.addEventListener('click',()=>{
    container.style.display ='flex';
})

window.addEventListener('click',(e)=>{
    if(e.target === container){
        container.style.display = 'none';
    }
})

exit.addEventListener('click',()=>{
    container.style.display = 'none';
})