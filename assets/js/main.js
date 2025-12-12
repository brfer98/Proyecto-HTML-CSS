// variables
const header = document.getElementById("header");
const nav = document.getElementById("navbar");
const footer = document.getElementById("footer");

const components = [
    document.getElementById("header"),
    document.getElementById("navbar"),
    document.getElementById("footer")
];

// var component

// functions

function callHeader(){
    fetch("components/header.html")
    .then(r => r.text())
    .then(d => {
        header.innerHTML = d;
    })
}

function callNavbar(){
    fetch("components/navbar.html")
    .then(r => r.text())
    .then(d => {
        nav.innerHTML = d;
    })
}

function callFooter(){
    fetch("components/footer.html")
    .then(r => r.text())
    .then(d => {
        footer.innerHTML = d;
    })
}





function callComponent(){

    components.forEach(component => {
        fetch
        
    });




    fetch("components/" + component + ".html")
    .then(r => r.text())
    .then(d =>{
        component.innerHTML = d;
    })
}


// call functions
document.addEventListener("DOMContentLoaded", callHeader);
document.addEventListener("DOMContentLoaded", callNavbar);
document.addEventListener("DOMContentLoaded", callFooter);

