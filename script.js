const btns=document.querySelectorAll('button');
let k7=document.getElementById("7");
k7.addEventListener('keydown',function(e){
    console.log(e);
})
console.log(btns);
btns.forEach(btn=>btn.addEventListener('click',function(e){
    console.log(e.target)
}))
// window.addEventListener('click', function(e){
//     console.log(e.target.value);
// });

window.addEventListener("keydown", function(e){
    console.log(e.value);
});