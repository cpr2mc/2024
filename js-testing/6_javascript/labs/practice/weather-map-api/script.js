// Weather Map API
const x = document.getElementById('demo');
const displayButton = document.getElementById('displayLocation');
let userLatitude = '';
let userLongitude = '';
let userDate = '1709850042';
    
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function checkResponse(response) {
    if (!response.ok) {
        console.error('Weather API call failed:', response.status, response.statusText);
        return;
    }
}

async function logWeather(lat, long, apiKey) {
    console.log('making weather api call...');
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
    console.log(url)
    const response = await fetch(url);
    checkResponse(response);
    const weatherData = await response.json();
    console.log('Weather data:', weatherData);
    // need to figure out how to display JSON next
}

function showPosition(position) {
    console.log(position)
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude;
    userLatitude = Math.floor(position.coords.latitude * 100) / 100;
    userLongitude = Math.floor(position.coords.longitude * 100) / 100;
    console.log(userLatitude, userLongitude)
    console.log('running weather request:' + logWeather(userLatitude, userLongitude, secretApiKey));

}

displayButton.onclick = getLocation;


