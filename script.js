// Task One

function dropDown() {

    // Henter fra HTML og CSS til JavaScript
    
    document.getElementById("myDropdown").classList.toggle("show");
}

// Når dropdown knapper blir trykket skal det komme en dropdown meny
// Henter også fra navn fra CSS

window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}

// Task Two

// Henter fra HTMl til JavaScript

const navbar = document.querySelector(".ul");

 // (let) Sjekker navOpen om den er false

let navOpen = false;

// Lager en funksjon til en hamburger knapp
// den dykker opp på telefon
// henter også fra navn fra CSS

function hamburgerMenu() {
    if (navOpen === false) {
        navbar.classList = "showNav";
        navOpen = true;
    } else {
        navbar.classList = "ul";
        navOpen = false;
    }
}