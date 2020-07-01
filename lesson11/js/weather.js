const apikey = 'c8b700625dde09d16975a2c5f43cd561';
const cityID = '5604473';
const method = 'weather';
const units = 'imperial';
const forecast = 'forecast';
let apiURL = 'https://api.openweathermap.org/data/2.5/' +
    method +
    '?id=' + cityID +
    '&APPID=' + apikey +
    '&units=' + units;
let apiURL1 = 'http://api.openweathermap.org/data/2.5/' +
    forecast +
    '?id=' + cityID +
    '&APPID=' + apikey +
    '&units=' + units;

console.log(apiURL);
console.log(apiURL1);

//apiURL = 'weather-request.json'
//apiURL1 = 'forecast.json';

/*--------- Fetch Current ---------*/

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        document.getElementById('current-temp').innerText = "Temp: " + Math.round(data.main.temp) + "\xB0" + "F";
        document.getElementById('current').textContent = "Current: " + data.weather[0].main;
        document.getElementById('humidity').textContent = "Humidity: " + data.main.humidity;
        document.getElementById('wind').textContent = "Wind Speed: " + data.wind.speed + " mph";

        let temp = data.main.temp;
        let wind = data.wind.speed;
        if (temp <= 50 && wind >= 3) {
            var wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
            var windchill = Math.round(wc);
            console.log(windchill);
        } else {
            var windchill = "N/A";
            console.log(windchill);
        }

        document.getElementById('windchill').innerHTML = "Wind Chill: " + windchill + "\xB0" + "F";
    });

/*---------- Fetch Forecast -----------*/
const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

fetch(apiURL1)
    .then(response => response.json())
    .then(data => {
        console.log(data);

       
        let days = document.getElementsByClassName('forecast.day');
                let i = 0;
                let list = data.list;
                for (item of list) {
                    if (item.dt_txt.includes("18:00:00")) {
                        temp = item.main.temp;
                        days[i].innerText = temp;
                        i++;
                        console.log(list);
                    }

                }

    });

const dt = item.dt;
let date = new Date(dt * 1000);
console.log(date);
document.getElementById('dayOfWeek').innerText = dayOfWeek[date.getDay()];



const imagesrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        const desc = data.weather[0].description;
        document.getElementById('imagesrc').innerText = imagesrc-i;
        document.getElementById('icon').setAttribute('src', icon);
        document.getElementById('icon').setAttribute('alt', desc);
        document.getElementById('desc').innerText = desc;