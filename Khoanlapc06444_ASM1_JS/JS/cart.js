var arrSlide = [
  "pants_1.jpg",
  "pants_1.jpg",
  "pants_3.jpg",
  "pants_4.jpg",
  "pants_5.jpg",
  "pants_8.jpg",
];

var i = 0;
var slideImg = document.getElementById("mySlide");
var t; //Set interval

function nextSlide() {
  i++;
  if (i >= arrSlide.length) i = 0;
  slideImg.src = "./img/" + arrSlide[i];
}

function beforeSlide() {
  i--;
  if (i < 0) i = 5;
  slideImg.src = "./img/" + arrSlide[i];
}



// Plus Minus
// Tăng giảm số lượng mua
let amountElement = document.getElementById("amount");
let amount = amountElement.value;

function handlePlus() {
    if (amount < 10) {
      amount++;
      amountElement.value = amount;
    } else {
      alert("Chỉ được mua tối đa 10 sản phẩm 1 lần");
  }
}

function handleMinus() {
  if (amount > 1) {
    amount--;
    amountElement.value = amount;
  }
}



// Zoom
let imgList = document.querySelectorAll(".cart__img-list img");
let mirror = document.querySelector("#mirror");
let scope = 4;

imgList.forEach(function (img) {
  img.addEventListener("mousemove", function (e) {
    mirror.classList.remove("hide");
    var percentMouseWidth = (e.offsetX / this.offsetWidth) * 100;
    var percentMouseHeight = (e.offsetY / this.offsetHeight) * 100;
    mirror.style.top = `${e.clientY}px`;
    mirror.style.left = `${e.clientX}px`;
    mirror.style.backgroundSize = `1000px 1000px`;

    mirror.style.backgroundPosition = `${percentMouseWidth}% ${percentMouseHeight}%`;

    var imgSource = e.target.getAttribute("src");
    mirror.style.backgroundImage = `url(${imgSource})`;
  });

  img.addEventListener("mouseout", function (e) {
    console.log("mouseout");
    mirror.classList.add("hide");
  });
});



