let history = [];

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const expression = display.value; 
        const result = eval(expression);
        display.value = result;
        addToHistory(`${expression} = ${result}`);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

function addToHistory(entry) {
    history.push(entry);
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const operators = ['+', '-', '*', '/'];

    if (!isNaN(key) || operators.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearDisplay();
    }
});
