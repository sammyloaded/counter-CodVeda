const display = document.getElementById('display');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');
const btnReset = document.getElementById('reset');

let count = 0;

function updateDisplay() {
    display.textContent = count;
    
    // Simple animation effect on change
    display.style.transform = 'scale(1.1)';
    setTimeout(() => {
        display.style.transform = 'scale(1)';
    }, 100);
}

btnIncrement.addEventListener('click', () => {
    count++;
    updateDisplay();
});

btnDecrement.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    } else {
        // Trigger shake animation if user tries to go below zero
        display.classList.add('negative-bounce');
        setTimeout(() => display.classList.remove('negative-bounce'), 400);
    }
});

btnReset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});