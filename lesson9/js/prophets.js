const url = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const resultsElement = document.getElementById('results');
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let h = ""; // string to hold our HTML

        let prophets = data.prophets; // The array of prophets

        // Loop through each prophet of the prophets array
        for (prophet of prophets) {
            h += `<section>
                 <h2>${prophet.name + ' ' + prophet.lastname}</h2>
                 <p>Date of Birth: ${prophet.birthdate}</p>
                 <p>Place of Birth: ${prophet.birthplace}</p>
                 <img src="${prophet.imageurl}" alt="${prophet.name + prophet.lastname + '-' + prophet.order}">
                </section>`;
        }

        // Close the div
        h += `</div>`;

        // Add the string we created to the results div
        resultsElement.innerHTML = h;
    });