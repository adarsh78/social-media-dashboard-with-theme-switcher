const modeBtn = document.querySelector(".mode");

const darkMode = () => {
    document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
    document.querySelector("header").style.backgroundColor = "hsl(232, 19%, 15%)";
    document.querySelectorAll(".card").forEach((crd) => {
        crd.style.backgroundColor = "hsl(228, 28%, 20%)";
    })
    document.querySelectorAll(".small-card").forEach((sc) => {
        sc.style.backgroundColor = "hsl(228, 28%, 20%)";
    })

    document.querySelectorAll("h2").forEach((count) => {
        count.style.color = "hsl(0, 0%, 100%)"
    })
    document.querySelector("h1").style.color = "hsl(0, 0%, 100%)"
    document.querySelector("h3").style.color = "hsl(0, 0%, 100%)"
}


const lightMode = () => {
    document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    document.querySelector("header").style.backgroundColor = "hsl(225, 100%, 98%)";
    document.querySelectorAll(".card").forEach((crd) => {
        crd.style.backgroundColor = "hsl(227, 47%, 96%)";
    })
    document.querySelectorAll(".small-card").forEach((sc) => {
        sc.style.backgroundColor = "hsl(227, 47%, 96%)";
    })

    document.querySelectorAll("h2").forEach((count) => {
        count.style.color = "hsl(230, 17%, 14%)"
    })
    document.querySelector("h1").style.color = "hsl(230, 17%, 14%)"
    document.querySelector("h3").style.color = "hsl(230, 17%, 14%)"
}



const isDarkMode = localStorage.getItem('darkMode') === 'true';


document.querySelector(".mode-button input").unchecked = isDarkMode;


// Apply dark mode based on stored preference
if (isDarkMode) {
    darkMode();
    document.querySelector(".mode-button input").unchecked = false;
} else {
    lightMode();
    document.querySelector(".mode-button input").checked = true;
}

modeBtn.addEventListener("change", (e) => {
    if (e.target.checked) {
        lightMode();
        document.querySelector(".mode-button input").style.background = "hsl(230, 22%, 74%)";
        document.querySelector(".mode-button input").style.transition = "background 0.8s ease";
        // Store the dark mode preference in local storage
        localStorage.setItem('darkMode', false);
    } else {
        darkMode();
        document.querySelector(".mode-button input").style.background = "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        document.querySelector(".mode-button input").style.transition = "background 0.8s ease";
        // Store the dark mode preference in local storage
        localStorage.setItem('darkMode', true);
    }
});