const btns=document.querySelectorAll('button')
console.log(btns);
btns.forEach(btn=>btn.addEventListener('keydown',function(e){
    console.log(e)
}))
window.addEventListener('click', function(e){
    console.log(e.target.value);
});

window.addEventListener("keydown", function(e){
    console.log(e);
});