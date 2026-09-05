let apiKey = "49cf95751235c57cc53653830cff242f";

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Nashik&appid=${apiKey}&units=metric`);
    const data = await response.json()
    // console.log(data);

    console.log("The city name is : ", data.name);
    console.log("Temperature is : ", data.main.temp)
    console.log("The humidity is : ", data.main.humidity);
    console.log("weather condition is :", data.weather[0].description); // here in weather o/p gives in array
     
}

getWeather();


