let appID = "ebe44e19cc28eede34234cb551308344"
function weatherData(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}&units=metric`)
    .then(res => res.json())
    .then(json => showWeatherData(json));
    }

    function showWeatherData(data) {
        document.getElementById('cityName').innerText = data.name;
        document.getElementById('temperature').innerText = data.main.temp;
        document.getElementById('condition').innerText = data.weather[0].main; 
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png `
    }

    weatherData('dhaka')
    document.getElementById("search").addEventListener("click", function () {
        const city = document.getElementById('city').value;
        weatherData(city)	
    })