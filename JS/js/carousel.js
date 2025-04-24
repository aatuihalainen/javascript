let cats_array = [{"name":"Mustikka", "src":"img/kissa.jpg"}, {"name":"Ruoho", "src":"img/kissa2.jpg"}, {"name":"Harmo", "src":"img/kissa3.jpg"}];

let slideIndex = 0;
let carouselimage = document.getElementById("karusellikuva");
let playbutton = document.getElementById("playbutton");
const index = localStorage.getItem("index");

//If slideIndex has been saved to browser ram
if(localStorage.hasOwnProperty("index")){
    slideIndex = parseInt(localStorage.getItem("index"));
    carouselimage.src = cats_array[slideIndex].src;
}

//Fuction to change slides
function changeSlide(direction){

    console.log(slideIndex);
    slideIndex = slideIndex + direction;

    if(slideIndex >= cats_array.length){
        slideIndex = 0;
    }

    else if (slideIndex < 0){
        slideIndex = cats_array.length - 1
    }

    carouselimage.src = cats_array[slideIndex].src;
    localStorage.setItem("index", slideIndex);
}

//Function for autoplay
function autoPlay(){
    if(playbutton.classList.contains("bi-play-fill")){
        imgInterval = setInterval(changeSlide, 2000, 1);
        playbutton.classList.replace("bi-play-fill", "bi-pause-fill");
    }

    else{
        playbutton.classList.replace("bi-pause-fill", "bi-play-fill");
        clearInterval(imgInterval);
    }
}