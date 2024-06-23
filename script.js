const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const locationElement = document.querySelector(".location");
const regionElement = document.querySelector(".region");
const countryElement = document.querySelector(".country");
const inputElement = document.querySelector("#input");
const searchButton = document.querySelector("#searchButton");

function fetchWeatherData(city) {
  const apiKey = "f641cf238e3d441a84f113452240505";
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      return response.json();
    })
    .then((data) => {
      console.log(data);
      tempElement.textContent = `Temperature: ${data.current.temp_c}°C`;
      humidityElement.textContent = `Humidity: ${data.current.humidity}%`;
      locationElement.textContent = `Location: ${data.location.name}`;
      regionElement.textContent = `Region: ${data.location.region}`;
      countryElement.textContent = `Country: ${data.location.country}`;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
searchButton.addEventListener("click", () => {
  const city = inputElement.value;
  fetchWeatherData(city);
});
