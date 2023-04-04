async function fetchData() {
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
    const rainfallEl = document.getElementById("rainfall");
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
    rainfallEl.innerHTML = `Rainfall: ${main.humidity} mm`;
    windSpeedEl.innerHTML = `Wind Speed: ${main.speed} km/h`; // fixed property reference
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
    ); // added await
    const { name, weather, main, dt } = await weatherData.json(); // added await
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
    const rainfallEl = document.getElementById("rainfall");
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
    rainfallEl.innerHTML = `Rainfall: ${main.humidity} mm`;
    windSpeedEl.innerHTML = `Wind Speed: ${main.speed} km/h`; // fixed property reference
    humidityEl.innerHTML = `Humidity: ${main.humidity}%`;
  });