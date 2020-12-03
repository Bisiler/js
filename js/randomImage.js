const mainImage = document.querySelector("#img");
const button = document.querySelector(".btn");

const images = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg"];

button.addEventListener(`click`, ()=>{
console.log("MonkeyKing");
let rnd = Math.floor(Math.random() * images.length);
mainImage.src = images[rnd];

});
