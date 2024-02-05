const modeBtn = document.querySelector(".mode");

const darkMode = () => {
    document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
    document.querySelector(".background-top").style.backgroundColor = "hsl(232, 19%, 15%)";
    document.querySelectorAll(".card").forEach((crd) => {
        crd.style.backgroundColor = "hsl(228, 28%, 20%)";
    })
    document.querySelectorAll(".small-card").forEach((sc) => {
        sc.style.backgroundColor = "hsl(228, 28%, 20%)";
    })

    document.querySelectorAll("h3").forEach((count) => {
        count.style.color = "hsl(0, 0%, 100%)"
    })
    document.querySelector("h1").style.color = "hsl(0, 0%, 100%)"
    document.querySelector("h2").style.color = "hsl(0, 0%, 100%)"
}


const lightMode = () => {
    document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    document.querySelector(".background-top").style.backgroundColor = "hsl(225, 100%, 98%)";
    document.querySelectorAll(".card").forEach((crd) => {
        crd.style.backgroundColor = "hsl(227, 47%, 96%)";
    })
    document.querySelectorAll(".small-card").forEach((sc) => {
        sc.style.backgroundColor = "hsl(227, 47%, 96%)";
    })

    document.querySelectorAll("h3").forEach((count) => {
        count.style.color = "hsl(230, 17%, 14%)"
    })
    document.querySelector("h1").style.color = "hsl(230, 17%, 14%)"
    document.querySelector("h2").style.color = "hsl(230, 17%, 14%)"
}



modeBtn.addEventListener("change", (e) => {
    if(e.target.checked) {
        lightMode();
        document.querySelector(".mode-button input").style.background = "hsl(230, 22%, 74%)";
        document.querySelector(".mode-button input").style.transition = "background 0.8s ease";
        console.log("checked");
    }
    else {
        darkMode();
        document.querySelector(".mode-button input").style.background = "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        document.querySelector(".mode-button input").style.transition = "background 0.8s ease";
        console.log("unchecked");
    }
})