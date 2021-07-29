let btns=document.querySelectorAll('button');

let show=document.querySelector("#top");
show.textContent='';
let showresult=document.querySelector('#bottom')
showresult.textContent='0';
let k7=document.getElementById("7");
// k7.addEventListener('keydown',function(e){
//     console.log(e);
// })
let elemstoshow=['1','2','3','4','5','6','7','8','9','0','.','/','*','-','+']
let elemstoshowresult=['1','2','3','4','5','6','7','8','9','0']
let operations=['/','*','-','+']
console.log(btns);
btns.forEach(btn=>btn.addEventListener('click',print_screen_button))
// window.addEventListener('click', function(e){
//     console.log(e.target.value);
// });

let txt='';
// for (let i=1;i<=2;i++){ 
window.addEventListener("keydown", print_screen_keydown);
txt+=print_screen_keydown 
console.log(txt);  

// printscreen(txt)

function print_screen_keydown(e){
    let num=e.key;
    let txt='';
    console.log(num);
    // while (num!=='Enter')
    // for (let i=1;i<=2;i++){
    // txt+=num;
    printscreen(num)
    // return txt
    // }

}
function print_screen_button(e){
    let num=e.target.id;
    let txt='';
    txt+=num;
    printscreen(txt)
}

function printscreen(text){
    // let show=document.querySelector("#screen");
    if(elemstoshow.indexOf(text)!==-1){
        show.textContent+=text;
        // if(elemstoshowresult.indexOf(text)!==-1){
            if (elemstoshowresult.includes(text)){
                showresult.textContent+=text
            }else if (operations.includes(text)){
                showresult.textContent=''
            }
        // }
    }
    if (text==='Enter'|| text=== '='){
        if(show.textContent[0]==='-'){
            show.textContent=show.textContent.slice(1);
            show.textContent='-'+calculate(show.textContent);
        }

        showresult.textContent=calculate(show.textContent);
        // show.textContent=showresult.textContent
        
    }
    let elems=text.split('')
    return elems
}
function calculate(element){
    if (element.includes('+')){
        return split_calculate(element,'+')
    }if (element.includes('-')){
        return split_calculate(element,'-')
    }if (element.includes('*')){
        return split_calculate(element,'*')
    }if (element.includes('/')){
        return split_calculate(element,'/')
    }
}
function split_calculate(element,operator){
    let ls=element.split(operator);
    let result=operate(ls[0],ls[1],operator).toString();
    // console.log(element);
    // console.log(element=result);
    return result;
}
console.log(operate(5,6,'-'));
function operate(a,b,operator){
    a=Number(a);
    b=Number(b);
    switch (operator){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;

    }
}

function clear_screen(elem){
    if (elem.textContent===0){
        elem.textContent='';    
    }
}

