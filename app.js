const fetchMe = () => {
  let weather = document.getElementById("search").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=705303948810324980db093f63a51039&units=metric`;

  fetch(url).then((response) => {
    response.json().then((convertedResponse) => {
      console.log(convertedResponse);
      let theWind = (convertedResponse.wind.speed)
      let gust = (convertedResponse.wind.gust)
      let myWind = (Math.round(Number(theWind+gust)))
      wind.innerHTML = `${myWind}km/h`
      nameC.innerHTML = `${convertedResponse.weather[0].description}`;
      country.innerHTML = `${convertedResponse.sys.country}`;
      pressure.innerHTML = `${convertedResponse.main.pressure}mb`;
      feels_like.innerHTML = `${convertedResponse.main.feels_like}℃`;
      humidity.innerHTML = `${convertedResponse.main.humidity}%`;
      temp.innerHTML = `${Math.round (convertedResponse.main.temp)}℃`
      description.innerHTML = `${convertedResponse.weather[0].description}`;
      longitude.innerHTML = `${(convertedResponse.coord.lon)}`
      latitude.innerHTML = `${(convertedResponse.coord.lat)}`
    });
  });
};
