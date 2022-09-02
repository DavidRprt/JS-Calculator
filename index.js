function updateDisplay() {
    document.getElementById("display").innerHTML = calculator.displayValue;
  }

function equal(){
    if (calculator.addOperand){
        let displayText = document.getElementById("display").innerHTML;
        calculator.displayValue = eval(displayText);
    }
    updateDisplay();
}

function clearDisplay() {
    calculator.displayValue = "0";
    calculator.operation = false;
    calculator.addOperand = true;
    updateDisplay();
}

function addNumber(number) {
    if (calculator.operation){
        let displayText = document.getElementById("display").innerHTML;
        calculator.displayValue = displayText + number;
    }
    else {
        calculator.displayValue = number;
        calculator.operation = true;
    }
    calculator.addOperand = true;
    updateDisplay();
}

function addOperand(operand){
    if (calculator.operation && calculator.addOperand){
        let displayText = document.getElementById("display").innerHTML;
        calculator.displayValue = displayText + operand;
        calculator.addOperand = false;
    }
    updateDisplay();
}
  
  let calculator = {
    operation: false,
    addOperand: true,
    displayValue: "0",
  }

