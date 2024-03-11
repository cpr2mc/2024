// Weather Map API
const locationInfo = document.getElementById('location-info');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.getElementById('weather-info')
const weatherButton = document.getElementById('display-weather');
let userLatitude = '';
let userLongitude = '';
    

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationInfo.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log(position)
    userLatitude = Math.floor(position.coords.latitude * 100) / 100;
    userLongitude = Math.floor(position.coords.longitude * 100) / 100;
    loadWeather(userLatitude, userLongitude, secretApiKey)
}

async function loadWeather(lat, long, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
    const response = await fetch(url);
    // if (!checkResponse(response)) return;
    
    var weatherData = await response.json();
    console.log(weatherData);
    
    document.querySelector('.city').innerHTML = weatherData.name;
    document.querySelector('.temp').innerHTML = Math.floor(weatherData.main.temp) + '°F';
    document.querySelector('.humidity').innerHTML = weatherData.main.humidity + '%';
    document.querySelector('.wind').innerHTML = Math.round(weatherData.wind.speed) + ' kts';   
}

async function searchWeather(cityName, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${cityName}&appid=${apiKey}`
}

function displayWeather(weatherData) {
    weatherInfo.innerHTML = JSON.stringify(weatherData, null, 2);
}

searchButton.onclick = searchWeather;

weatherButton.onclick = function () {
    displayWeather(weatherData)
}

document.addEventListener("DOMContentLoaded", (event) => {
    getLocation();
});  

// function checkResponse(response) {
    //     if (!response.ok) {
        //         console.error('Weather API call failed:', response.status, response.statusText);
        //         weatherInfo.innerHTML = 'Failed to retrieve weather data.';
        //         return false;
        //     }
        //     return true;
        // }
        