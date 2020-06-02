let copyrightyear = new Date().getFullYear();
document.getElementById('year').innerHTML = copyrightyear;

let modified = document.lastModified;
document.getElementById('lastModified').innerHTML = modified;

/* Hamburger Menu */
const menu = document.querySelectorAll(".navigation")[0];
document.getElementById("menu-button").addEventListener("click", () => {
    menu.classList.toggle("responsive");
});