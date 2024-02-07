const fetchMe = () => {
  let weather = document.getElementById("search").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=705303948810324980db093f63a51039&units=metric`;

  fetch(url).then((response) => {
    response.json().then((convertedResponse) => {
      console.log(convertedResponse);
      console.log(convertedResponse);
      nameC.innerHTML = `${convertedResponse.name}`;
    });
  });
};
