let menu = document.getElementById("menu");
let times = document.getElementById("times")
let bars = document.getElementById("bars");
let links = document.querySelectorAll("a");
let sectionMain = document.getElementById("sectionMain");

for(let i = 0; i < links.length; i++) {
    links[i].classList.add("active");
}

bars.onclick = function () {
    menu.style.width = "330px";
    times.style.visibility = "visible";
    sectionMain.style.left = "60%";
    for(let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

times.onclick = function () {
    this.style.visibility = "hidden";
    sectionMain.style.left = "53%";
    menu.style.width = "70px";
        for(let i = 0; i < links.length; i++) {
            links[i].classList.add("active");
        }
}
