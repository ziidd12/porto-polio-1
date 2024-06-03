`use strict`;

// PRELOADER

const preloader = document.querySelector("[data-preloader]")

window.addEventListener("DOMContentLoaded", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});


// add event on multipe element

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.legth; i < len; i++ ) {
        elements[i].addEventListener(eventType, callback)
    }
}


// Mobile Navbar togle

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelector(["data-nav-toggler"]);
const navLinks = document.querySelectorAll(["data-nav-link"]);
const overlay = document.querySelector(["data.-overlay"]);

addEventOnElements(navTogglers, "click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
});

add.addEventOnElements(navLinks, "click", function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-active");
});

