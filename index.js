async function fetchData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tombstone&appid=16a34368def6b27b3322796818634fa8&units=metric');
  
    const data = await response.json();
    const name = document.getElementById("name")
    name.innerHTML = data.name;
    const condition = document.getElementById("condition")
    condition.innerHTML = data.weather[0].description;
    const temp_c = document.getElementById("temp_c")
    temp_c.innerHTML = data.main.temp + "<sup>o</sup>C";
    const localtime = document.getElementById("localtime")
    const date = new Date(data.dt * 1000);
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    localtime.innerHTML = date.toLocaleDateString(undefined, options);
  }
  
  fetchData()
  
  const searchBar = document.getElementById("SearchBar");
  searchBar.addEventListener("submit", async function(e) {
    e.preventDefault();
    const searchfield = document.getElementById("form").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchfield}&appid=16a34368def6b27b3322796818634fa8&units=metric`);
    const data = await response.json();
    const name = document.getElementById("name")
    name.innerHTML = data.name;
    const condition = document.getElementById("condition")
    condition.innerHTML = data.weather[0].description;
    const temp_c = document.getElementById("temp_c")
    temp_c.innerHTML = data.main.temp + "<sup>o</sup>C";
    const localtime = document.getElementById("localtime")
    const date = new Date(data.dt * 1000);
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    localtime.innerHTML = date.toLocaleDateString(undefined, options);
  });
  
/*async function fetchData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tombstone&appid=16a34368def6b27b3322796818634fa8');

    const data = await response.json();
    const name = document.getElementById("name")
    name.innerHTML=data.location.name
    const condition= document.getElementById("condition")
    condition.innerHTML=data.current.condition.text
    const temp_C= document.getElementById("temp_c")
    temp_c.innerHTML=data.current.temp_c
    const localtime = document.getElementById("localtime")
    localtime.innerHTML=data.location.localtime
}
fetchData()


const SearchBar = document.getElementById("SearchBar")
SearchBar.addEventListener("click",async function(e){
    e.preventDefault()
    const searchfield = document.getElementById("form").value
    console.log(searchfield)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tombstone&appid=16a34368def6b27b3322796818634fa8&q=${searchfield}`);

    const data = await response.json();
    console.log(data)

    const name = document.getElementById("name")
    name.innerHTML=data.location.name
    const condition= document.getElementById("condition")
    condition.innerHTML=data.current.condition.text
    const temp_C= document.getElementById("temp_c")
    temp_c.innerHTML=data.current.temp_c
    const localtime = document.getElementById("localtime")
    localtime.innerHTML=data.location.localtime


})


/*async function fetchData() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=f139d93b47eb43fa95313127232703&q=kathmandu');
    
    const data = await response.json();
    const name = document.getElementById("name")
    name.innerHTML=data.location.name
    const condition= document.getElementById("condition")
    condition.innerHTML=data.current.condition.text
    const temp_C= document.getElementById("temp_c")
    temp_c.innerHTML=data.current.temp_c
    const localtime = document.getElementById("localtime")
    localtime.innerHTML=data.location.localtime
}
fetchData()


const SearchBar = document.getElementById("SearchBar")
SearchBar.addEventListener("click",async function(e){
    e.preventDefault()
    const searchfield = document.getElementById("form").value
    console.log(searchfield)
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f139d93b47eb43fa95313127232703&q=${searchfield}`);
    const data = await response.json();
    console.log(data)

    const name = document.getElementById("name")
    name.innerHTML=data.location.name
    const condition= document.getElementById("condition")
    condition.innerHTML=data.current.condition.text
    const temp_C= document.getElementById("temp_c")
    temp_c.innerHTML=data.current.temp_c
    const localtime = document.getElementById("localtime")
    localtime.innerHTML=data.location.localtime


}) */