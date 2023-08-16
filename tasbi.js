// const counterDisplay = document.getElementById("counter");
// const incrementButton = document.getElementById("increment");
// const resetButton = document.getElementById("reset");

// let count = 0;

// function updateCounter() {
//     counterDisplay.textContent = count;
// }

// function incrementCount() {
//     count++;
//     updateCounter();
// }

// function resetCount() {
//     count = 0;
//     updateCounter();
// }

// incrementButton.addEventListener("click", incrementCount);
// resetButton.addEventListener("click", resetCount);


// tasbi.js

// Get all the counter elements and buttons
const counters = document.querySelectorAll(".text-4xl");
const incrementButtons = document.querySelectorAll("#increment");
const resetButtons = document.querySelectorAll("#reset");

// Add event listeners to each set of buttons
for (let i = 0; i < incrementButtons.length; i++) {
    let count = 0;

    // Increment button click event
    incrementButtons[i].addEventListener("click", () => {
        count++;
        counters[i].textContent = count;
    });

    // Reset button click event
    resetButtons[i].addEventListener("click", () => {
        count = 0;
        counters[i].textContent = count;
    });
}

