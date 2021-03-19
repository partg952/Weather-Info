let search_div = document.getElementById("search")
let main_container = document.getElementById("main-container")
let input = document.createElement("input")
let button = document.createElement("input")
button.type = "button"
button.value = "Search"
input.type = "text"

search_div.appendChild(input)
input.placeholder = "Enter City Name"
input.classList.add("search")
search_div.appendChild(button)

button.addEventListener("click" , ()=>{
   fetchWeather();
})

input.addEventListener("change" , ()=>{
    fetchWeather();
})

function fetchWeather(){
    while(main_container.firstChild){
        main_container.removeChild(main_container.firstChild)
    }
    console.log("clicked")
    fetch("https://api.openweathermap.org/data/2.5/weather?q="  + input.value + ",india" + "&appid=8527177c79a8eff5265ae310c826d223").then(response=>{
        return response.json()
    }).then(blob=>{
    console.log(blob)
    let name_div = document.createElement("div")
    let weather_div = document.createElement("div")
    let image = document.createElement("img")
    let weather_1 = document.createElement("p")
    let weather = document.createElement("p")
	let temp_div = document.createElement("div")
	let max_temp_div = document.createElement("div")
	let min_temp_div = document.createElement("div")
	let visibility_div = document.createElement("div")
    let min_temp = document.createElement("p")
    let max_temp = document.createElement("p")
    let temp = document.createElement("p")
    temp_div.appendChild(temp)
    max_temp_div.appendChild(max_temp)
    min_temp_div.appendChild(min_temp)
    main_container.appendChild(name_div)
    main_container.appendChild(max_temp_div)
    main_container.appendChild(min_temp_div)
    main_container.appendChild(temp_div)
    temp.innerHTML = "Temp: " + blob.main.temp
    max_temp.innerHTML = "Max Temp: " + blob.main.temp_max
    min_temp.innerHTML = "Min Temp: " + blob.main.temp_min
    let name = document.createElement("p")
    name_div.appendChild(name)
    name.innerHTML = "Name: " + blob.name
    main_container.appendChild(weather_div)
    weather_div.classList.add("weather")
	main_container.appendChild(visibility_div)
	let visibility = document.createElement("p")
	visibility.innerHTML = "Visibility: " + blob.visibility
	visibility_div.appendChild(visibility)
	for(let i=0;i<blob.weather.length;i++){
	weather_1.innerHTML = blob.weather[i].main
    image.src = "http://openweathermap.org/img/w/" + blob.weather	[i].icon +  ".png"   
	}
	 weather.innerHTML = "Weather:"
        weather_div.appendChild(weather)
        weather_div.appendChild(image) 
        weather_div.appendChild(weather_1)
       

    })
}
