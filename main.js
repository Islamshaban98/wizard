
const slidePage = document.querySelector(".slidePage");
const nextBtn = document.querySelector(".nextBtn");
const prevBtnsec = document.querySelector(".prev-1");
const nextBtnsec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnForth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max=4;
let current =1;

nextBtn.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current+=1;
});
nextBtnsec.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current+=1;
});
nextBtnThird.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current+=1;
});
submitBtn.addEventListener( "click", function(e){
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current+=1;
    setTimeout(function(){
        alert("thanks for subscribtion");
        location.reload();
    },800);
});
prevBtnsec.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    current-=1;

});
prevBtnThird.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    current-=1;

});
prevBtnForth.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    current-=1;
});

