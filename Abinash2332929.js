async function fetchData() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tombstone&appid=16a34368def6b27b3322796818634fa8');
  const data = await response.json();
  console.log(data);
  const name = document.getElementById("name");
  name.innerHTML = data.name;
  const unixTimestamp = data.dt;
  const dateElement = document.getElementById('localtime');
  const date = new Date(unixTimestamp * 1000);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', options);
  dateElement.innerHTML = dateString;
  const temp = document.getElementById("temp_c");
  const tempInCelsius = (data.main.temp - 273).toFixed(2);
  temp.innerHTML = `${tempInCelsius} &deg;C`;
  const description = document.getElementById("condition");
  const desc = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1).toLowerCase();
  description.innerHTML = desc;
  const humidity = document.getElementById("humidity");
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  const speed = document.getElementById("speed");
  speed.innerHTML = `Wind: ${data.wind.speed}m/s`;
  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
  const iconElement = document.getElementById('icon');
  iconElement.src = iconUrl;
  const pressure2 = document.getElementById("pressure");
  pressure2.innerHTML = `Pressure: ${data.main.pressure} hpa`;

}

fetchData();

const SearchBar = document.getElementById("SearchBar");
SearchBar.addEventListener("click", async function (e) {
  e.preventDefault();
  const searchfield = document.getElementById("form").value;
  console.log(searchfield);
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchfield}&appid=16a34368def6b27b3322796818634fa8`);
  const data = await response.json();
  console.log(data);
  const name = document.getElementById("name");
  if (data.cod != "404") {
      name.innerHTML = data.name;
  }
  else {
      name.innerHTML = "Invalid City";
  }
  const unixTimestamp = data.dt;
  const dateElement = document.getElementById('localtime');
  const date = new Date(unixTimestamp * 1000);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', options);
  dateElement.innerHTML = dateString;
  const temp = document.getElementById("temp_c");
  const tempInCelsius = (data.main.temp - 273).toFixed(2);
  temp.innerHTML = `${tempInCelsius} &deg;C`;
  const description = document.getElementById("condition");
  const desc = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1).toLowerCase();
  description.innerHTML = desc;
  const humidity = document.getElementById("humidity");
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  const pressure2 = document.getElementById("pressure");
  pressure2.innerHTML = `Pressure: ${data.main.pressure} hpa`;
  const speed = document.getElementById("speed");
  speed.innerHTML = `Wind: ${data.wind.speed}m/s`;
  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
  const iconElement = document.getElementById('icon');
  iconElement.src = iconUrl;
})















/*async function fetchData() {
    const weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Tombstone&appid=16a34368def6b27b3322796818634fa8&units=metric`
    );
    const { name, weather, main, dt } = await weatherData.json();
    
    const condition = weather[0].description;
    const temp = main.temp;
    const date = new Date(dt * 1000).toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    const nameEl = document.getElementById("name");
    const conditionEl = document.getElementById("condition");
    const tempEl = document.getElementById("temp_c");
    const localtimeEl = document.getElementById("localtime");
    const weatherIcon = document.getElementById("weather-icon");
    const PressureEl = document.getElementById("pressure");
    const windSpeedEl = document.getElementById("wind-speed");
    const humidityEl = document.getElementById("humidity");
  
    nameEl.innerHTML = `${name}`;
    conditionEl.innerHTML = `${condition}`;
    tempEl.innerHTML = `${temp.toFixed(0)}<sup>o</sup>C`;
    localtimeEl.innerHTML = `${date}`;
  
    // Set Weather Icon
    const iconCode = weather[0].icon;
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${iconCode}.png"/>`;
  
    // Additional Weather Information
    PressureEl.innerHTML = `Pressure: ${main.pressure} mm`;
    windSpeedEl.innerHTML = `Wind-Speed: ${main.speed} km/h`; 
    humidityEl.innerHTML = `Humidity: ${main.humidity}%`;
  }
  
  fetchData();
  document.getElementById("SearchBar").addEventListener("submit", async function (
    event
  ) {
    event.preventDefault();
  
    const city = document.getElementById("form").value;
    const weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16a34368def6b27b3322796818634fa8&units=metric`
    ); 
    const { name, weather, main, dt } = await weatherData.json(); 
    const condition = weather[0].description;
    const temp = main.temp;
    const date = new Date(dt * 1000).toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    const nameEl = document.getElementById("name");
    const conditionEl = document.getElementById("condition");
    const tempEl = document.getElementById("temp_c");
    const localtimeEl = document.getElementById("localtime");
    const weatherIcon = document.getElementById("weather-icon");
    const PressureEl = document.getElementById("pressure");
    const windSpeedEl = document.getElementById("wind-speed");
    const humidityEl = document.getElementById("humidity");
  
    nameEl.innerHTML = `${name}`;
    conditionEl.innerHTML = `${condition}`;
    tempEl.innerHTML = `${temp.toFixed(0)}<sup>o</sup>C`;
    localtimeEl.innerHTML = `${date}`;
  
    // Set Weather Icon
    const iconCode = weather[0].icon;
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${iconCode}.png"/>`;
  
    // Additional Weather Information
    PressureEl.innerHTML = `Pressure: ${main.pressure} mm`;
    windSpeedEl.innerHTML = `wind-speed: ${main.speed} km/h`; 
    humidityEl.innerHTML = `Humidity: ${main.humidity}%`;
  });*/