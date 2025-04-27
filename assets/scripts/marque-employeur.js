let button1 = document.getElementById("btn1");
let card1 = document.getElementById("card1");
let button2 = document.getElementById("btn2");
let card2 = document.getElementById("card2");

button1.onclick = function () {
    card1.classList.toggle("return");
    this.classList.toggle("activeBtn");
    if(this.innerHTML === "next") {
        this.innerHTML = "back";
    }else {
        this.innerHTML = "next";
    }
}

button2.onclick = function () {
    card2.classList.toggle("return");
    this.classList.toggle("activeBtn");
    if(this.innerHTML === "next") {
        this.innerHTML = "back";
        this.classList.add("activeBtn");
    }else {
        this.innerHTML = "next";
        this.classList.remove("activeBtn");
    }
}