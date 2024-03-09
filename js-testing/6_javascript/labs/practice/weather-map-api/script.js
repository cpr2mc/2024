// Weather Map API
const locationInfo = document.getElementById('location-info');
const displayButton = document.getElementById('display-location');
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

function checkResponse(response) {
    if (!response.ok) {
        console.error('Weather API call failed:', response.status, response.statusText);
        weatherInfo.innerHTML = 'Failed to retrieve weather data.';
        return false;
    }
    return true;
}

async function logWeather(lat, long, apiKey, callback) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
    const response = await fetch(url);
    if (!checkResponse(response)) return;

    const weatherData = await response.json();
    callback(weatherData);
}

function showPosition(position) {
    locationInfo.innerHTML = "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude;
    userLatitude = Math.floor(position.coords.latitude * 100) / 100;
    userLongitude = Math.floor(position.coords.longitude * 100) / 100;
}

function displayWeather(weatherData) {
    weatherInfo.innerHTML = JSON.stringify(weatherData, null, 2);
}

displayButton.onclick = getLocation;

weatherButton.onclick = function () {
    logWeather(userLatitude, userLongitude, secretApiKey, displayWeather)
}

