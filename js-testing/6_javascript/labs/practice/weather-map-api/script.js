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

async function logWeather(lat, long, apiKey) {
    console.log('making weather api call...');
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`);
    console.log('complete.');
    console.log(weather);
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


