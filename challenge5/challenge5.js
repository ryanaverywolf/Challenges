const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const modulusBtn = document.querySelector(".modulus");

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3")

addBtn.addEventListener('click', sumValues)
subtractBtn.addEventListener('click', subtractValues)
multiplyBtn.addEventListener('click', multiplyValues)
divideBtn.addEventListener('click', divideValues)
modulusBtn.addEventListener('click', modulusValues)

function sumValues(e) {
    e.preventDefault();
    // console.log(e);
let num1=Number(input1.value);
let num2=Number(input2.value);
let res=num1+num2;
input3.innerText = res;
}

function subtractValues(e) {
    e.preventDefault();
    // console.log(e);
let num1=Number(input1.value);
let num2=Number(input2.value);
let res=num1-num2;
input3.innerText = res;

}

function multiplyValues(e) {
    e.preventDefault();
    // console.log(e);
let num1=Number(input1.value);
let num2=Number(input2.value);
let res=num1*num2;
input3.innerText = res;

}

function divideValues(e) {
    e.preventDefault();
    // console.log(e);
let num1=Number(input1.value);
let num2=Number(input2.value);
let res=num1/num2;
input3.innerText = res;

}

function modulusValues(e) {
    e.preventDefault();
    // console.log(e);
let num1=Number(input1.value);
let num2=Number(input2.value);
let res=num1%num2;
input3.innerText = res;

}