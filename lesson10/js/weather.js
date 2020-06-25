const apikey = 'c8b700625dde09d16975a2c5f43cd561';
const cityID = '5604473';
const method = 'weather';
const units = 'imperial';
let apiURL = 'http://api.openweathermap.org/data/2.5/' +
    method +
    '?id=' + cityID +
    '&APPID=' + apikey +
    '&units=' + units;

console.log(apiURL);

//apiURL = 'weather-request.json'

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        document.getElementById('current-temp').innerText = "Temp: " + Math.round(data.main.temp) + "\xB0" + "F";
        document.getElementById('current').textContent = "Current: " + data.weather[0].main;
        document.getElementById('humidity').textContent = "Humidity: " + data.main.humidity;
        document.getElementById('wind').textContent = "Wind Speed: " + data.wind.speed + " mph";
        const imagesrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        const desc = data.weather[0].description;

        document.getElementById('imagesrc').innerText = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('atl', desc);
        document.getElementById('desc').innerText = desc;

        
        let temp = data.main.temp;
        let wind = data.wind.speed;
        if (temp <= 50 && wind >= 3) {
            var wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
            var windchill = Math.round(wc);
        } else {
            var windchill = "N/A";
        }
        console.log(windchill);
        document.getElementById('windchill').innerHTML = "Wind Chill: " + windchill + "\xB0" + "F";
    });