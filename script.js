// Calculator functionality
let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = '';
let waitingForNewInput = false;

// Initialize display
display.value = currentInput;

/**
 * Append value to display
 * @param {string} value - The value to append
 */
function appendToDisplay(value) {
    // Handle operators
    if (['+', '-', '*', '/'].includes(value)) {
        handleOperator(value);
        return;
    }
    
    // Handle decimal point
    if (value === '.') {
        handleDecimal();
        return;
    }
    
    // Handle numbers
    if (waitingForNewInput) {
        currentInput = value;
        waitingForNewInput = false;
    } else {
        currentInput = currentInput === '0' ? value : currentInput + value;
    }
    
    updateDisplay();
}

/**
 * Handle operator input
 * @param {string} op - The operator
 */
function handleOperator(op) {
    if (previousInput !== '' && !waitingForNewInput) {
        calculate();
    }
    
    previousInput = currentInput;
    operator = op;
    waitingForNewInput = true;
}

/**
 * Handle decimal point input
 */
function handleDecimal() {
    if (waitingForNewInput) {
        currentInput = '0.';
        waitingForNewInput = false;
    } else if (currentInput.indexOf('.') === -1) {
        currentInput += '.';
    }
    
    updateDisplay();
}

/**
 * Perform calculation
 */
function calculate() {
    if (previousInput === '' || operator === '' || waitingForNewInput) {
        return;
    }
    
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    let result;
    
    try {
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    throw new Error('Division by zero');
                }
                result = prev / current;
                break;
            default:
                return;
        }
        
        // Handle floating point precision issues
        if (result % 1 !== 0) {
            result = Math.round(result * 100000000) / 100000000;
        }
        
        currentInput = result.toString();
        previousInput = '';
        operator = '';
        waitingForNewInput = true;
        
    } catch (error) {
        handleError(error.message);
        return;
    }
    
    updateDisplay();
}

/**
 * Clear current input (C button)
 */
function clearDisplay() {
    currentInput = '0';
    waitingForNewInput = false;
    updateDisplay();
}

/**
 * Clear all (AC button)
 */
function clearAll() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    waitingForNewInput = false;
    updateDisplay();
}

/**
 * Delete last character (backspace)
 */
function deleteLast() {
    if (currentInput.length > 1 && currentInput !== '0') {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

/**
 * Calculate square root
 */
function calculateSquareRoot() {
    let current = parseFloat(currentInput);
    
    if (current < 0) {
        handleError('Invalid input for square root');
        return;
    }
    
    let result = Math.sqrt(current);
    currentInput = result.toString();
    waitingForNewInput = true;
    updateDisplay();
}

/**
 * Calculate percentage
 */
function calculatePercentage() {
    let current = parseFloat(currentInput);
    let result = current / 100;
    currentInput = result.toString();
    waitingForNewInput = true;
    updateDisplay();
}

/**
 * Toggle sign (+/-)
 */
function toggleSign() {
    if (currentInput !== '0') {
        currentInput = currentInput.startsWith('-') 
            ? currentInput.substring(1) 
            : '-' + currentInput;
        updateDisplay();
    }
}

/**
 * Update display with current input
 */
function updateDisplay() {
    // Limit display length to prevent overflow
    let displayValue = currentInput;
    if (displayValue.length > 12) {
        displayValue = parseFloat(displayValue).toExponential(6);
    }
    display.value = displayValue;
}

/**
 * Handle errors
 * @param {string} message - Error message
 */
function handleError(message) {
    display.value = 'Error';
    display.classList.add('error');
    
    // Remove error class after animation
    setTimeout(() => {
        display.classList.remove('error');
        clearAll();
    }, 1500);
    
    console.error('Calculator Error:', message);
}

/**
 * Keyboard support
 */
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Prevent default for calculator keys
    if ('0123456789+-*/.='.includes(key) || key === 'Enter' || key === 'Backspace' || key === 'Delete' || key === 'Escape') {
        event.preventDefault();
    }
    
    // Handle number keys
    if ('0123456789'.includes(key)) {
        appendToDisplay(key);
    }
    
    // Handle operator keys
    else if (['+', '-', '*'].includes(key)) {
        appendToDisplay(key);
    }
    
    // Handle division (both / and ÷)
    else if (key === '/') {
        appendToDisplay('/');
    }
    
    // Handle decimal point
    else if (key === '.') {
        appendToDisplay('.');
    }
    
    // Handle equals and enter
    else if (key === '=' || key === 'Enter') {
        calculate();
    }
    
    // Handle backspace
    else if (key === 'Backspace') {
        deleteLast();
    }
    
    // Handle delete and escape (clear)
    else if (key === 'Delete' || key === 'Escape') {
        clearAll();
    }
});

// Prevent context menu on right click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Add visual feedback for button presses
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0)';
    });
    
    button.addEventListener('mouseup', function() {
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});