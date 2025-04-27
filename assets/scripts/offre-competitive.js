// let button1 = document.getElementById("btn1");
// let button3 = document.getElementById("btn3");

// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");



// button2.addEventListener("click", function () {
//     for(let i = 0; i < tab.length; i++) {
//         tab[i].classList.remove("activeBtn");
//     }
//         box1.style.left = "-100%";
//         box2.style.right = "0";
// });

// button3.addEventListener("click", function() {
//     for(let i = 0; i < tab.length; i++) {
//         tab[i].classList.remove("activeBtn");
//     }
//     this.classList.add("activeBtn");
//     box2.style.left = "-100%";
//     box3.style.right = "0";
// })

let containerImg = document.getElementById("containerImg");
let tab = document.querySelectorAll(".btn");
let button1= document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");

button1.addEventListener("click", function () {
    for(let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("activeBtn");
    }
    this.classList.add("activeBtn");
    containerImg.style.left = "0";
});

button2.addEventListener("click", function () {
    for(let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("activeBtn");
    }
    this.classList.add("activeBtn");
    containerImg.style.left = "-105%";
});

button3.addEventListener("click", function () {
    for(let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("activeBtn");
    }
    this.classList.add("activeBtn");
    containerImg.style.left = "-209%";
});

