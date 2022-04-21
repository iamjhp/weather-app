import Weather from './weather';

const updateDisplay = (cityWeatherInfo, weatherForecast) => {
  const h1 = document.querySelector("h1");
  h1.innerText = "Weather in " + cityWeatherInfo.name;
  
  const currTemp = document.querySelector(".temperature");
  currTemp.innerText = Math.round(cityWeatherInfo.main.feels_like) + "°C";

  const weatherIcon = document.querySelector(".icon");
  weatherIcon.src = "http://openweathermap.org/img/wn/" + cityWeatherInfo.weather[0].icon + ".png";

  const currDescription = document.querySelector(".description");
  currDescription.innerText = cityWeatherInfo.weather[0].description;

  const currHumidity = document.querySelector(".humidity");
  currHumidity.innerText = "Humidity: " + cityWeatherInfo.main.humidity + "%";

  const currWindSpeed = document.querySelector(".wind");
  currWindSpeed.innerText = "Wind speed: " + cityWeatherInfo.wind.speed + " km/h";

  deleteForeCastLists();
  createForeCastList(weatherForecast);
}

const convertToDate = (dt) => {
  return new Date(dt * 1000).toLocaleDateString("en");
}

const convertToDay = (dt) => {
  return new Date(dt * 1000).toLocaleDateString("en", {
    weekday: "long",
  });
}

const createForeCastList = (weatherForecast) => {
  const listItems = document.querySelector(".list-items");
  for (let i = 1; i <= 6; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    listItems.appendChild(item);

    const fDayDiv = document.createElement("div");
    fDayDiv.classList.add("forecast-day");
    fDayDiv.textContent = convertToDay(weatherForecast.daily[i].dt);
    item.appendChild(fDayDiv);

    const fDateDiv = document.createElement("div");
    fDateDiv.classList.add("forecast-date");
    fDateDiv.textContent = convertToDate(weatherForecast.daily[i].dt);
    item.appendChild(fDateDiv);

    const fIconDiv = document.createElement("div");
    fIconDiv.classList.add("forecast-icon");
    item.appendChild(fIconDiv);

    const img = document.createElement("img");
    img.classList.add("icon");
    img.src = "http://openweathermap.org/img/wn/" + weatherForecast.daily[i].weather[0].icon + ".png";
    fIconDiv.appendChild(img);

    const fTempDiv = document.createElement("div");
    fTempDiv.classList.add("forecast-temperature");
    fTempDiv.textContent = Math.round(weatherForecast.daily[i].feels_like.day) + "°C";
    item.appendChild(fTempDiv);

  }
}

const deleteForeCastLists = () => {
  const listItems = document.querySelector(".list-items");
  let childNode = listItems.lastElementChild;
  while (childNode) {
    listItems.removeChild(childNode);
    childNode = listItems.lastElementChild
  }
}

export default updateDisplay;