let copyrightyear = new Date().getFullYear();
document.getElementById('year').innerHTML = copyrightyear;

let modified = document.lastModified;
document.getElementById('lastModified').innerHTML = modified;

function toggleMenu() {
    document.getElementsByClassName("primaryNav")[0].classList.toggle("responsive");
}