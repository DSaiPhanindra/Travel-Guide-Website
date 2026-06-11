const apiKey = "ed18cbc0031968573a3eb882f79280c8";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("temperature").innerHTML =
            data.main.temp + " °C";

        document.getElementById("weather").innerHTML =
            data.weather[0].description;

        document.getElementById("wind").innerHTML =
            data.wind.speed + " m/s";

        document.getElementById("humidity").innerHTML =
            data.main.humidity + "%";

        document.getElementById("map").src =
        `https://maps.google.com/maps?q=${city}&t=&z=10&ie=UTF8&iwloc=&output=embed`;

    }
    catch(error){
        alert("City not found");
    }
}