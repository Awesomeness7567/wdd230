// Update this URL to your API call URL to openweather
 
// const weatherURL = "./data/3dayweather.json"
const forecastLAT = 33.360355;
const forecastLON = 111.801682;
const forecastAPIKEY = "09a5ea9abf61d512978e656e0cf99f4c";
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${forecastLAT}&lon=${forecastLON}&appid=${forecastAPIKEY}&units=imperial`;

const ONE_DAY = 24 * 60 * 60 * 1000;

function displayForecast(forecastData) {
  // Get dates for next three days
  let dates = [];
  let mydate = new Date();
  for (let i = 0; i < 3; i++) {
    mydate = new Date(mydate.getTime() + ONE_DAY);
    nextdate = mydate.toISOString().slice(0, 10);
    dates.push(nextdate);
  }

  // Find the object with the highest temperature for each day
  highTemps = dates.map((date) =>
    forecastData
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((currentObj, highObj) =>
        currentObj.main.temp > highObj.main.temp ? currentObj : highObj
      )
  );
  // Find the object with the lowest temperature for each day
  lowTemps = dates.map((date) =>
    forecastData
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((currentObj, lowObj) =>
        currentObj.main.temp < lowObj.main.temp ? currentObj : lowObj
      )
  );

  // Add the forecast information to the HTML document
  weatherElt = document.querySelector("#forecast");
  for (let i = 0; i < 3; i++) {
    let newsection = document.createElement("section");
    newsection.innerHTML = `<h3>${
      dates[i]
    }</h3><p class="centered">High: ${highTemps[i].main.temp.toFixed(
      0
    )}&deg;</p><p class="centered">Low: ${lowTemps[i].main.temp.toFixed(
      0
    )}&deg;</p>`;
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