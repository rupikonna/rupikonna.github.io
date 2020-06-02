let copyrightyear = new Date().getFullYear();
document.getElementById('year').innerHTML = copyrightyear;

let modified = document.lastModified;
document.getElementById('lastModified').innerHTML = modified;

/* Hamburger Menu */
const menu = document.querySelectorAll(".navigation")[0];
document.getElementById("menu-button").addEventListener("click", () => {
    menu.classList.toggle("responsive");
});

const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }
    img.src = src;
}

const imgObtions = {
    treshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgObtions);

images.forEach(image => {
    imgObserver.observe(image);
});