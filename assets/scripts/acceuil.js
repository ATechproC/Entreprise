let darkmode = localStorage.getItem("darkmode");
let themeSwitch = document.getElementById("btnSwitch");

const enableDarkmode = () => {
    btnSwitch.classList.add("left");
    btnSwitch.classList.add("white");
    containerSwitch.classList.add("black");
    document.body.classList.add("white");
    message.classList.add("color");
    text.classList.add("textColor");
    localStorage.setItem("darkmode", "active");
}

const disableDarkmode = () => {
    btnSwitch.classList.remove("left");
    btnSwitch.classList.remove("white");
    containerSwitch.classList.remove("black");
    document.body.classList.remove("white");
    message.classList.remove("color");
    text.classList.remove("textColor");
    localStorage.setItem("darkmode", "null");
}

if(darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});


