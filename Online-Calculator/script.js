// Get the display element
let display = document.getElementById('display');

// Function to add value to the display
function addToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to evaluate the expression in the display
function calculate() {
    try {
        // Use eval() to evaluate the expression and update display with result
        let result = eval(display.value);
        display.value = result;
    } catch(error) {
        // Handle any errors (e.g., syntax error) and display "Error" message
        display.value = 'Error';
    }
}
