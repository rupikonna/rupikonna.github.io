let temp = Number(document.getElementById('temp').innerHTML);
let wind = Number(document.getElementById('wind').innerHTML);
if (temp <= 50 && wind >= 3) {
    var wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
    var windchill = Math.round(wc);
} 
else {
    var windchill = "N/A";
}
document.getElementById('windchill').innerHTML = windchill;