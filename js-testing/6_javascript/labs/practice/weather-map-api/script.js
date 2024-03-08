// Weather Map API
const x = document.getElementById('demo');
const displayButton = document.getElementById('displayLocation');
let userLatitude = '';
let userLongitude = '';
    
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

async function logWeather(lat, long, apiKey) {
    console.log('making weather api call...');
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`);
    console.log('complete.');
    console.log(weather);
}

function showPosition(position) {
    console.log(position)
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude;
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
    logWeather(userLatitude, userLongitude, secretApiKey);
}

displayButton.onclick = getLocation;


