import './css/style.css';
import Weather from './js/weather';
import DisplayUpdate from './js/view';

const button = document.querySelector('button');
const searchBar = document.querySelector('.search-bar');

const displayWeather = async () => {
  let value = searchBar.value;
  if (value == "") value = "Zurich";
  try{
    const [cityWeatherInfo, weatherForecast] = await Weather.getData(value);
    DisplayUpdate(cityWeatherInfo, weatherForecast);
  } catch (err) {
    //console.log(err);
  }

}

button.addEventListener('click', () => {
  displayWeather();
})

searchBar.addEventListener('keyup', (evt) => {
  if (evt.key == "Enter") {
    displayWeather();
  }
})

displayWeather();