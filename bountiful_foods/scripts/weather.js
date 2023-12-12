// current weather
function getWeather() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=09a5ea9abf61d512978e656e0cf99f4c')
    .then(response => response.json())
    .then(data => {
      const temperature = (data.main.temp - 273.15) * 9/5 + 32;
      const description = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
      const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const humidity = data.main.humidity;
      document.getElementById('temperature').textContent = `${temperature.toFixed(0)}°F`;
      document.getElementById('condition').textContent = description;
      document.getElementById('icon').src = icon;
      document.getElementById('humidity').textContent = `${humidity}%`;
    });
}
getWeather();


// forecast
const forecastLAT = 33.1581;
const forecastLON = -117.3506;
const forecastAPIKEY = "09a5ea9abf61d512978e656e0cf99f4c";
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${forecastLAT}&lon=${forecastLON}&appid=${forecastAPIKEY}&units=imperial`;

const ONE_DAY = 24 * 60 * 60 * 1000;

function displayForecast(forecastData) {
  let dates = [];
  let mydate = new Date();
  for (let i = 0; i < 3; i++) {
    mydate = new Date(mydate.getTime() + ONE_DAY);
    nextdate = mydate.toISOString().slice(0, 10);
    dates.push(nextdate);
  }

  highTemps = dates.map((date) =>
    forecastData
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((currentObj, highObj) =>
        currentObj.main.temp > highObj.main.temp ? currentObj : highObj
      )
  );
  lowTemps = dates.map((date) =>
    forecastData
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((currentObj, lowObj) =>
        currentObj.main.temp < lowObj.main.temp ? currentObj : lowObj
      )
  );

  weatherElt = document.querySelector("#forecast");
  for (let i = 0; i < 3; i++) {
    let newsection = document.createElement("section");
    let description = forecastData[i * 8 + 3].weather[0].description;
    let capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1).toLowerCase();
    newsection.innerHTML = `<h3>${dates[i]}</h3><img src="https://openweathermap.org/img/wn/${forecastData[i * 8 + 3].weather[0].icon}.png" alt="${description}"/><p class="centered">${capitalizedDescription}</p>`;
    weatherElt.append(newsection);
  }
}

async function getTheForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      const listInfo = data.list;
      displayForecast(listInfo);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
getTheForecast();

