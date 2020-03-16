const nav = document.querySelector(".nav-links");
const links = nav.querySelectorAll("a");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    });
});