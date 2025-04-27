let containerSwitch = document.getElementById("containerSwitch");
let btnSwitch = document.getElementById("btnSwitch");
let message = document.getElementById("message");
let marquee = document.getElementById("marquee");
let text= document.getElementById("text");


btnSwitch.addEventListener("click", function () {
    this.classList.toggle("left");
    this.classList.toggle("white");
    containerSwitch.classList.toggle("black");
    document.body.classList.toggle("white");
    message.classList.toggle("color");
    text.classList.toggle("textColor");
});


