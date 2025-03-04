let history = []; // Array to store history of calculations

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
        const expression = display.value; // Get the current expression
        const result = eval(expression); // Evaluate the expression
        display.value = result; // Show the result in the display
        addToHistory(`${expression} = ${result}`); // Add the full calculation to history
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear error after 1.5 seconds
    }
}

function addToHistory(entry) {
    history.push(entry);
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear current history display
    history.forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = entry; // Display the full calculation
        historyList.appendChild(li);
    });
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const operators = ['+', '-', '*', '/'];

    // Check if the key is a number or an operator
    if (!isNaN(key) || operators.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearDisplay();
    }
});