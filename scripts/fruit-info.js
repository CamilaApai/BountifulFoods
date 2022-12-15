const requestURL =
  "https://brotherblazzard.github.io/canvas-content/fruit.json";
const displayinfo = document.querySelector(".displayinfo");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    fruits = jsonObject;
    fruits.forEach(displayFruitData);
  });

function displayFormData() {
  const firstname = document.querySelector("#fname").value;
  const lastname = document.querySelector("#lname").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#cellphone").value;
  const firstoption = document.querySelector("#firstoption").value;
  const secondoption = document.querySelector("#secondoption").value;
  const thirdoption = document.querySelector("#thirdoption").value;
  const instructions = document.querySelector("#instructions").value;
  const date = document.querySelector("#datetime").value;

  fullnameinput.innerHTML = `Full Name: ${firstname} ${lastname}`;
  emailinput.innerHTML = `Email: ${email}`;
  phoneinput.innerHTML = `Cell Phone: ${phone}`;
  firstoptioninput.innerHTML = `First Fruit: ${firstoption}`;
  secondoptioninput.innerHTML = `Second Fruit: ${secondoption}`;
  thirdoptioninput.innerHTML = `Third Fruit: ${thirdoption}`;
  instructionsinput.innerHTML = `Additional Instructions: ${instructions}`;
  dateinput.innerHTML = `Date: ${date}`;
}

let numdrinksCount = Number(window.localStorage.getItem("countdrinks"));
if (numdrinksCount == 0) {
  numdrinksCount++;
} else {
  numdrinksCount++;
}
numdrinksCount = Number(
  window.localStorage.setItem("countdrinks", numdrinksCount)
);

function displayFruitData(data) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let newfirstoption = document.createElement("option");
  let newsecondoption = document.createElement("option");
  let newthirdoption = document.createElement("option");

  let carbohydrates = document.createElement("p");
  let protein = document.createElement("p");
  let fat = document.createElement("p");
  let sugar = document.createElement("p");
  let calories = document.createElement("p");

  //Change the textContent property of the firstname element to contain the prophet's full name
  newfirstoption.innerHTML = `${data.name}`;
  newsecondoption.textContent = `${data.name}`;
  newthirdoption.textContent = `${data.name}`;

  carbohydrates.textContent = `Carbohydrates: ${data.nutritions.carbohydrates}`;
  protein.textContent = `Protein: ${data.nutritions.protein}`;
  fat.textContent = `Fat: ${data.nutritions.fat}`;
  sugar.textContent = `Sugar: ${data.nutritions.sugar}`;
  calories.textContent = `Calories: ${data.nutritions.calories}`;

  //Add the section(card) with the firstname element
  firstoption.appendChild(newfirstoption);
  secondoption.appendChild(newsecondoption);
  thirdoption.appendChild(newthirdoption);

  card.appendChild(carbohydrates);
  card.appendChild(protein);
  card.appendChild(fat);
  card.appendChild(sugar);
  card.appendChild(calories);

  //Addthe existing HTML div with the displayinfo class with the section(card)
  displayinfo.appendChild(card);
}
