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

apiURL = 'weather-request.json'

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        document.getElementById('current-temp').innerText = data.main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        const desc = data.weather[0].description;

        document.getElementById('imagesrc').innerText = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc); 
        document.getElementById('icon').setAttribute('atl', desc);
        document.getElementById('desc').innerText = desc;
    });