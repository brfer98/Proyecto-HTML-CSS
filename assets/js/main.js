// variables
const nav = document.getElementById("navbar");


// functions
function callNavbar(){
    fetch("components/navbar.html")
    .then(r => r.text())
    .then(d => {
        nav.innerHTML = d;
    })
}


// call functions
document.addEventListener("DOMContentLoaded", callNavbar);
