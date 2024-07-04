const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// IMAGE SLIDER
const mySlide = document.querySelectorAll(".hero-slider");
const dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);
let timer = setInterval(autoslide, 3000);

function autoslide(){
    counter += 1;
    slidefun(counter)
}

function plusSlides(n){
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 3000);
}

function slidefun(n){
    for(let i = 0; i < mySlide.length; i++){
        mySlide[i].style.display = "none";
    }
    for(let i = 0; i < dot.length; i++){
        dot[i].classList.remove("active");
    }
    
    if(n > mySlide.length){
        counter = 1;
    }
    if(n < 1){
        counter = mySlide.length;
    }

    mySlide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add("active");
}