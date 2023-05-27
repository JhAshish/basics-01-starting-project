const defulatResult = 0;
let currentResult = 0;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: currentResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += parseInt(enteredNumber);
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= parseInt(enteredNumber);
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= parseInt(enteredNumber);
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= parseInt(enteredNumber);
        mathOperator = '/';
    }
    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber);
}

function doOperation(calculationType) {
    calculateResult(calculationType);
}

addBtn.addEventListener('click', () => {
    doOperation('ADD');
});
subtractBtn.addEventListener('click', () => {
    doOperation('SUBTRACT');
});
multiplyBtn.addEventListener('click', () => {
    doOperation('MULTIPLY');
});
divideBtn.addEventListener('click', () => {
    doOperation('DIVIDE');
});