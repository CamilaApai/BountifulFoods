//GETS CURRENT YEAR | Footer 
//Get current date
const date = new Date();

//GETS CURRENT DATE | MAIN (Fresh)
//Get current date
//Use querySelector to access the HTML element.
const dateUK = document.querySelector("#date");

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(date);

dateUK.innerHTML = `Date: ${fulldateUK}`;