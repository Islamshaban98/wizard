
const slidePage = document.querySelector(".slidePage");
const nextBtn = document.querySelector(".nextBtn");
const prevBtnsec = document.querySelector(".prev-1");
const nextBtnsec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnForth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

nextBtn.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "-25%";
});
nextBtnsec.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";

});
nextBtnThird.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "-75%";
});
prevBtnsec.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "0%";
});
prevBtnThird.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "-25%";

});
prevBtnForth.addEventListener( "click", function(e){
    e.preventDefault();
    slidePage.style.marginLeft = "-50%";
});

