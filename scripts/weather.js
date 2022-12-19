//Slideshow | Main(Home)
// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("#weather-description");
const humidity = document.querySelector("#humidity");
const forecast = document.querySelector("#forecast");
const firstForecast = document.querySelector("#firstforecast");
const secondForecast = document.querySelector("#secondforecast");
const thirdForecast = document.querySelector("#thirdforecast")
const iconOne = document.querySelector("#iconone");
const iconTwo = document.querySelector("#icontwo");
const iconThree = document.querySelector("#iconthree")
const iconOneDescription = document.querySelector("#icononedescription");
const iconTwoDescription = document.querySelector("#icontwodescription");
const iconThreeDescription = document.querySelector("#iconthreedescription");

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
  humidity.innerHTML = `Humidity: ${data.list[0].main.humidity.toFixed(0)}%`;
  firstForecast.innerHTML = `${data.list[8].main.temp.toFixed(0)}°F`;
  secondForecast.innerHTML = `${data.list[16].main.temp.toFixed(0)}°F`;
  thirdForecast.innerHTML = `${data.list[24].main.temp.toFixed(0)}°F`;
  iconOneDescription.innerHTML = `${data.list[8].weather[0].description}`;
  iconTwoDescription.innerHTML = `${data.list[16].weather[0].description}`;
  iconThreeDescription.innerHTML = `${data.list[24].weather[0].description}`
  weatherDescription.innerHTML = `Condition: ${data.list[0].weather[0].description}`;

  const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  const iconsrcone = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
  const iconsrctwo = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
  const iconsrcthree = `https://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png`;

  const desc = data.list[0].weather[0].description;
  const descOne = data.list[8].weather[0].description;
  const descTwo = data.list[16].weather[0].description;
  const descThree = data.list[24].weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  weatherDescription.textContent = desc;
  weatherIcon.loading = "lazy";
  iconOne.setAttribute("src", iconsrcone);
  iconOne.setAttribute("alt", descOne);
  iconOne.loading = "lazy";
  iconTwo.setAttribute("src", iconsrctwo);
  iconTwo.setAttribute("alt", descTwo);
  iconTwo.loading = "lazy";
  iconThree.setAttribute("src", iconsrcthree);
  iconThree.setAttribute("alt", descThree);
  iconThree.loading = "lazy";
}
