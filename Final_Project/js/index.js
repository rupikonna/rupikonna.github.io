let copyrightyear = new Date().getFullYear();
document.getElementById('year').innerHTML = copyrightyear;

let modified = document.lastModified;
document.getElementById('lastModified').innerHTML = modified;

/* Hamburger Menu */
const menu = document.querySelectorAll(".navigation")[0];
document.getElementById("menu-button").addEventListener("click", () => {
    menu.classList.toggle("responsive");
});

let cityName = ["Salt Lake City", "Washington DC", "London England", "Helsinki Finland"];

for (i = 0; i < cityName.length; i++) {
    const apikey = 'c8b700625dde09d16975a2c5f43cd561';
    if (i == 0) {
        cityID = "5780993"; /* Salt Lake City */
    } else if (i == 1) {
        cityID = "4744725"; /* Arlinton VA in lue of Washington DC */
    } else if (i == 2) {
        cityID = "2643743"; /* London England */
    } else {
        cityID = "658226"; /* Helsinki Finland */
    };
    console.log (cityID);

    const method = 'weather';
    const units = 'imperial';
    const forecast = 'forecast';
    let apiURL = '//api.openweathermap.org/data/2.5/' +
        method +
        '?id=' + cityID +
        '&APPID=' + apikey +
        '&units=' + units;
    let apiURL1 = '//api.openweathermap.org/data/2.5/' +
        forecast +
        '?id=' + cityID +
        '&APPID=' + apikey +
        '&units=' + units;

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
            } else {
                var windchill = "N/A";
            }

            document.getElementById('windchill').innerHTML = "Wind Chill: " + windchill + "\xB0" + "F";
        });
}