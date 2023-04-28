var arrSlide = [
    "banner1.webp", 
    "banner2.webp", 
    "banner4.jpg",
];

  
var i=0;
var slideImg = document.getElementById("mySlide");
var t; //Set interval

// Tiến
function nextSlide(){
    i++;
    if(i >= arrSlide.length ) i = 0;
    slideImg.src= "./img/" + arrSlide[i];
}

// Lùi
function beforeSlide(){
    i--;
    if(i <0 ) i = 2;
    slideImg.src= "./img/" + arrSlide[i];
}

// Tự chạy
function fStart(){
    if(i >= arrSlide.length){
        t = window.setInterval(beforeSlide, 2000);
    }
    else {
        t = window.setInterval(nextSlide, 2000);
    }
}


// Count dow flash sale
const time_sale = document.querySelector('.time-sale');
let minute = 30,
    second = 0;

setInterval(() => {
    if (second == 0) {
        second = 59;
        minute--;
    } else {
        second--;
    }
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    let timer = `${minute} : ${second}`;
    time_sale.innerText = timer;
}, 1000);



