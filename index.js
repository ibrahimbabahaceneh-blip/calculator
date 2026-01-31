const result = document.getElementById("result")
const body = document.body
const main = document.querySelector("main")
const buttons = document.getElementsByClassName("btn")
const tops = document.getElementsByClassName("top")
const operationBtns = document.getElementsByClassName("operation")

function read(input){
    if(result.value === '0'){
        result.value = input
    } else {
        result.value += input
    }
}
function clearResult(){
    result.value = '0'
}
let firstOperand = null;
let currentOperation = null;

function calculate(operation) {
    if(operation == '%'){
        result.value /= 100
    } else if(operation == '-1'){
        result.value *= -1
    } else {     
    firstOperand = Number(result.value); 
    currentOperation = operation; 
    clearResult(); }                      
}

function evaluateResult() {
    const secondOperand = Number(result.value);
    switch (currentOperation) {
        case '/':
            result.value = firstOperand / secondOperand;
            break;
        case '*':
            result.value = firstOperand * secondOperand;
            break;
        case '+':
            result.value = firstOperand + secondOperand;
            break;
        case '-':
            result.value = firstOperand - secondOperand;
            break;
        case '-1':
                result.value = firstOperand * (-1)
            break;
        case '%': result.value /= 100
            break;
    }
    
}




Array.from(tops).forEach((top)=>{
    top.style.backgroundColor = "white"
})

Array.from(buttons).forEach((btn)=>{
    btn.style.border = "1px solid grey"
})
let dark = false
function darkMode(){
    const themeBtn = document.getElementById("theme-btn")
    const themeBox = document.getElementById("themeBox")
    const resultStyle = document.getElementById("result").style
    if(!dark){
        dark = true
        Array.from(buttons).forEach( button => {
            button.style.backgroundColor = "white"
            button.style.color = "black"
            button.style.border = "1px solid black"
        })
        themeBtn.style.transform = "translateX(100%)"
        themeBtn.style.backgroundColor = "white"
        themeBtn.style.border = "2px solid black"
        body.style.backgroundColor = "white"
        main.style.borderColor = "black"
        themeBox.style.borderColor = "black"
        resultStyle.color = "black"
    } else{
        dark = false
        Array.from(buttons).forEach( button => {
            button.style.backgroundColor = "rgb(20, 20, 20)"
            button.style.color = "white"
            button.style.border = "1px solid white"
        })
        themeBtn.style.transform = "translateX(0)"
        themeBtn.style.backgroundColor = "rgb(20, 20, 20)"
        themeBtn.style.border = "2px solid rgb(20, 20, 20)"
        body.style.backgroundColor = "black"
        main.style.borderColor = "white"
        themeBox.style.borderColor = "rgb(20, 20, 20)"
        resultStyle.color = "white"
        for(let operationbtn of operationBtns){
            operationbtn.style.backgroundColor = "rgb(90, 90, 90)"
        }
        Array.from(tops).forEach( top =>{
            top.style.backgroundColor = "white"
            top.style.color = "black"
        })
    }
}