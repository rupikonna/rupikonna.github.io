const url = "https://byui-cit230.github.io/weather/data/towndata.json";
const resultsElement = document.getElementById('results');
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let h = "";
        let towns = data.towns;

        for (town of towns) {
            if (town.name == "Fish Haven" || town.name == "Preston" || town.name == "Soda Springs") {
                h += `<section>
                 <h2>${town.name}</h2>
                 <h3>${town.motto}</h3>
                 <p class="article">Year Founded: ${town.yearFounded}</p>
                 <p class="article">Population: ${town.currentPopulation}</p>
                 <p class="article">Annual Rain Fall: ${town.averageRainfall}</p>
                 <img src="/lesson9/images/${town.photo}" alt="${town.name}">
                </section>`;
            }
        }
        h += `</div>`;
        resultsElement.innerHTML = h;
    });