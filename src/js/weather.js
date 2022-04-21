const weather = (() => {
  const apiKey = '5eca0c39c604e902edf3400068d619bb';

  async function getCityInformation(city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`, {mode: 'cors'});
      if (!response.ok) return Promise.reject("No weather found!");
      const data = await response.json();
      return data
    } catch (err) {
      alert(err);
    }
  }
  
  async function getData(city) {
    try {
      const cityWeatherInfo = await getCityInformation(city);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityWeatherInfo.coord.lat}&lon=${cityWeatherInfo.coord.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${apiKey}`, {mode: 'cors'});
      if (!response.ok) return Promise.reject("No weather found!");
      const data = await response.json();
      return [cityWeatherInfo, data];
    } catch (err) {
      alert(err);
    }
  }

  return {getData};
})();

export default weather;