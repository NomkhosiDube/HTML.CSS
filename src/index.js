let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
    windSpeed: 10.5,
    description: "moderate rain",
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
    windSpeed: 5.2,
    description: "clear sky",
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
    windSpeed: 3.1,
    description: "sunny",
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
    windSpeed: 8.7,
    description: "foggy",
  },
  oslo: {
    temp: -5,
    humidity: 20,
    windSpeed: 6.8,
    description: "snowy",
  },
};

function updateWeather(city) {
  let cityKey = city.toLowerCase();
  if (weather[cityKey]) {
    let cityWeather = weather[cityKey];
    document.querySelector(".current-city").innerText =
      city.charAt(0).toUpperCase() + city.slice(1);
    document.querySelector(".current-details").innerHTML = `
        ${cityWeather.description} <br />
        Humidity: <strong>${cityWeather.humidity}%</strong>, Wind: <strong>${cityWeather.windSpeed} km/h</strong>`;
    document.querySelector(".current-temperature-value").innerText = Math.round(
      cityWeather.temp
    );
    document.querySelector(".current-temperature-unit").innerText = "°C";
    document.querySelector(".current-temperature-icon").innerText = "🌡️";
  } else {
    alert(
      `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${city}`
    );
  }
}

document
  .querySelector("#search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let cityInput = document.querySelector(".search-input").value.trim();
    updateWeather(cityInput);
    document.querySelector(".search-input").value = "";
  });

function displayCurrentDateTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let formattedTime = `${day} ${hours}:${minutes}`;
  document.getElementById("date-time").innerText = formattedTime;
}

displayCurrentDateTime();
