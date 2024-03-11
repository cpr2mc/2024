// Weather Map API
const locationInfo = document.getElementById('location-info');
const weatherInfo = document.getElementById('weather-info');
const citySearch = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function printWeather(response) {
    var weatherData = await response.json();
    console.log(weatherData);
    
    document.querySelector('.city').innerHTML = weatherData.name;
    document.querySelector('.temp').innerHTML = Math.round(weatherData.main.temp) + '°F';
    document.querySelector('.humidity').innerHTML = weatherData.main.humidity + '%';
    document.querySelector('.wind').innerHTML = Math.round(weatherData.wind.speed) + ' kts';

    weatherIcon.src = 'images/' + weatherData.weather[0].main + '.png'

    document.querySelector('.weather').style.display = 'block'
}

async function searchWeather(city, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=${apiKey}`;

    const response = await fetch(url);
    
    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        printWeather(response);
    }
}

searchButton.onclick = () => {
    document.querySelector('.error').style.display = 'none';
    searchWeather(citySearch.value, secretApiKey);
};

citySearch.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        document.querySelector('.error').style.display = 'none';
        searchWeather(citySearch.value, secretApiKey);
    }
});

/** ------------------------------------------------------------------------------------------------------------------- */

/** Version 1: Gets user's location (if allowed) and automatically displays it */

// let userLatitude = '';
// let userLongitude = '';

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         locationInfo.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
                    
// function showPosition(position) {
//     console.log(position)
//     userLatitude = Math.floor(position.coords.latitude * 100) / 100;
//     userLongitude = Math.floor(position.coords.longitude * 100) / 100;
//     loadWeather(userLatitude, userLongitude, secretApiKey)
// }
// async function loadWeather(lat, long, apiKey) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
//     const response = await fetch(url);
//     // if (!checkResponse(response)) return;
    
//     printWeather(response);
// }
// document.addEventListener("DOMContentLoaded", (event) => {
//     getLocation();
// });  

// function checkResponse(response) {
//     if (!response.ok) {
    //         console.error('Weather API call failed:', response.status, response.statusText);
    //         weatherInfo.innerHTML = 'Failed to retrieve weather data.';
    //         return false;
    //     }
    //     return true;
    // }
        