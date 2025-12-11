        const nav = document.getElementById("navbar");
        fetch("components/navbar.html")
            .then(r => r.text())
            .then(d => {
                navbar.innerHTML = d;
            })