let firstNumber="";
let secondNumber="";
let operator="";

function append(number){
    playSound();
    if(operator===""){
        firstNumber+=number;
        document.getElementById('res').value=firstNumber;
    }
    else{
        secondNumber+=number;
        document.getElementById('res').value=firstNumber+operator+secondNumber;
    }
}
function operate(op){
    playSound();
    operator=op;
    document.getElementById('res').value=firstNumber+operator;
}
function calculate(){
    playSound();
    let result;
    switch(operator){
        case'+':
        result=parseInt(firstNumber)+parseInt(secondNumber);
        break;
         case'-':
        result=parseInt(firstNumber)-parseInt(secondNumber);
        break;
         case'*':
        result=parseInt(firstNumber)*parseInt(secondNumber);
        break;
         case'/':
        result=parseInt(firstNumber)/parseInt(secondNumber);
        break;
    }
    document.getElementById('res').value=result
}
function clearresult(){
    playSound();
    firstNumber="";
    secondNumber="";
    operator="";
    document.getElementById('res').value="";
}

let clickSound=new Audio("mixkit-interface-option-select-2573.wav");

function playSound(){
    clickSound.currentTime=0;
    clickSound.play();
}


