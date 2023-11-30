// Task One

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

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

const navbar = document.querySelector(".ul");

let navOpen = false;

function hamburgerMenu() {
    if (navOpen === false) {
        navbar.classList = "showNav";
        navOpen = true;
    } else {
        navbar.classList = "ul";
        navOpen = false;
    }
}