const constValue=document.querySelector('#content');

const increment =() => {
let value = parseInt(constValue.innerText);
value = value + 1;
constValue.innerText=value;
}

const decrement =() => {
    let value = parseInt(constValue.innerText);
value = value - 1;
constValue.innerText=value;
}