const defulatResult = 0;
let currentResult = 0;

function add(a, b) {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}
addBtn.addEventListener('click', add);
