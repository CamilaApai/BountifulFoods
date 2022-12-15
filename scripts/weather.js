// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("#weather-description");
const humidity = document.querySelector("#humidity");
const forecast = document.querySelector("#forecast");
const firstforecast = document.querySelector("#firstforecast");
const secondforecast = document.querySelector("#secondforecast");
const thirdforecas = document.querySelector("#thirdforecast");

//Creates an "url" variable that stores the API URL
const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=33.15342001648221&lon=-117.34940914717774&appid=64852b5276cd6e2cc74ad12cef7c0123&units=imperial";

//Use fetch() to request the given weather api url
async function apiFetch() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      display(data);
    } else {
      console.log(`Response not OK ${await response.text()}`);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
apiFetch();

// Display the results
function display(data) {
  currentTemp.innerHTML = `Temperature: ${data.list[0].main.temp.toFixed(0)}°F`;
  weatherDescription.innerHTML = `Condition: ${data.list[0].weather[0].description}`;
  humidity.innerHTML = `Humidity: ${data.list[0].main.humidity.toFixed(0)}%`;
  firstforecast.innerHTML = `Day 1: ${data.list[8].main.temp.toFixed(0)}°F`;
  secondforecast.innerHTML = `Day 2: ${data.list[16].main.temp.toFixed(0)}°F`;
  thirdforecas.innerHTML = `Day 3: ${data.list[24].main.temp.toFixed(0)}°F`;

  const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", weatherDescription);
  weatherIcon.width = 50;
  weatherIcon.height = 50;
}
