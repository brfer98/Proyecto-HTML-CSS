// variables
const components = [
    document.getElementById("header"),
    document.getElementById("navbar"),
    document.getElementById("footer")
];

// functions

function callComponent(){

    components.forEach(c => {
        fetch("components/" + c.id + ".html")
        .then(r => r.text())
        .then(d => {
            c.innerHTML = d;
        })
    });
}


// call functions
document.addEventListener("DOMContentLoaded", callComponent);