// CALCULATES NUMBER OF DRINKS SUBMITTED USING THE FORM | Main
// Initialize display elements
let drinksmade = document.querySelector(".drinksmade");

// Get the stored value in localStorage
let numdrinks = Number(window.localStorage.getItem("countdrinks"));

// Display the number of visits.
drinksmade.textContent = `You've made ${numdrinks} custom drinks so far.`;

// Store the new number of visits value
numdrinks = Number(window.localStorage.setItem("countdrinks", numdrinks));
