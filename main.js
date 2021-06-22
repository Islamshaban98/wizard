
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
function Active1() {
    var checkBox = document.getElementById("feature1");
    if (checkBox.checked === true){
        document.getElementById("feature1-box").style.backgroundColor = "#05CAB610";
        document.getElementById("feature1-box").style.color = "#05CAB6";
        document.getElementById("feature1-box").style.border = "1.8px solid #05CAB6";
    } else {
        document.getElementById("feature1-box").style.backgroundColor = "#fff";
        document.getElementById("feature1-box").style.color = "#0F0F0F";
        document.getElementById("feature1-box").style.border = "1.8px solid #05CAB600";
    }
  }
  function Active2() {
    var checkBox = document.getElementById("feature2");
    if (checkBox.checked === true){
        document.getElementById("feature2-box").style.backgroundColor = "#05CAB610";
        document.getElementById("feature2-box").style.color = "#05CAB6";
        document.getElementById("feature2-box").style.border = "1.8px solid #05CAB6";
    } else {
        document.getElementById("feature2-box").style.backgroundColor = "#fff";
        document.getElementById("feature2-box").style.color = "#0F0F0F";
        document.getElementById("feature2-box").style.border = "1.8px solid #05CAB600";
    }
  }
  function Active3() {
    var checkBox = document.getElementById("feature3");
    if (checkBox.checked === true){
        document.getElementById("feature3-box").style.backgroundColor = "#05CAB610";
        document.getElementById("feature3-box").style.color = "#05CAB6";
        document.getElementById("feature3-box").style.border = "1.8px solid #05CAB6";
    } else {
        document.getElementById("feature3-box").style.backgroundColor = "#fff";
        document.getElementById("feature3-box").style.color = "#0F0F0F";
        document.getElementById("feature3-box").style.border = "1.8px solid #05CAB600";
    }
  }
  function Active4() {
    var checkBox = document.getElementById("feature4");
    if (checkBox.checked === true){
        document.getElementById("feature4-box").style.backgroundColor = "#05CAB610";
        document.getElementById("feature4-box").style.color = "#05CAB6";
        document.getElementById("feature4-box").style.border = "1.8px solid #05CAB6";
    } else {
        document.getElementById("feature4-box").style.backgroundColor = "#fff";
        document.getElementById("feature4-box").style.color = "#0F0F0F";
        document.getElementById("feature4-box").style.border = "1.8px solid #05CAB600";
    }
  }
  function Active5() {
    var checkBox = document.getElementById("feature5");
    if (checkBox.checked === true){
        document.getElementById("feature5-box").style.backgroundColor = "#05CAB610";
        document.getElementById("feature5-box").style.color = "#05CAB6";
        document.getElementById("feature5-box").style.border = "1.8px solid #05CAB6";
    } else {
        document.getElementById("feature5-box").style.backgroundColor = "#fff";
        document.getElementById("feature5-box").style.color = "#0F0F0F";
        document.getElementById("feature5-box").style.border = "1.8px solid #05CAB600";
    }
  }
  function Active6() {
    var checkBox = document.getElementById("feature6");
    if (checkBox.checked === true){
        document.getElementById("feature6-box").style.backgroundColor = "#05CAB610";
        document.getElementById("feature6-box").style.color = "#05CAB6";
        document.getElementById("feature6-box").style.border = "1.8px solid #05CAB6";
    } else {
        document.getElementById("feature6-box").style.backgroundColor = "#fff";
        document.getElementById("feature6-box").style.color = "#0F0F0F";
        document.getElementById("feature6-box").style.border = "1.8px solid #05CAB600";
    }
  }
  function Active7() {
    var checkBox = document.getElementById("feature7");
    if (checkBox.checked === true){
        document.getElementById("feature7-box").style.backgroundColor = "#05CAB610";
        document.getElementById("feature7-box").style.color = "#05CAB6";
        document.getElementById("feature7-box").style.border = "1.8px solid #05CAB6";
    } else {
        document.getElementById("feature7-box").style.backgroundColor = "#fff";
        document.getElementById("feature7-box").style.color = "#0F0F0F";
        document.getElementById("feature7-box").style.border = "1.8px solid #05CAB600";
    }
  }
  function Active8() {
    var checkBox = document.getElementById("feature8");
    if (checkBox.checked === true){
        document.getElementById("feature8-box").style.backgroundColor = "#05CAB610";
        document.getElementById("feature8-box").style.color = "#05CAB6";
        document.getElementById("feature8-box").style.border = "1.8px solid #05CAB6";
    } else {
        document.getElementById("feature8-box").style.backgroundColor = "#fff";
        document.getElementById("feature8-box").style.color = "#0F0F0F";
        document.getElementById("feature8-box").style.border = "1.8px solid #05CAB600";
    }
  }

var checkBox = document.getElementById("feature1");
if (checkBox.checked === true){
    document.getElementById("feature1-box").style.backgroundColor = "#05CAB610";
    document.getElementById("feature1-box").style.color = "#05CAB6";
    document.getElementById("feature1-box").style.border = "1.8px solid #05CAB6";
} else {
    document.getElementById("feature1-box").style.backgroundColor = "#fff";
    document.getElementById("feature1-box").style.color = "#0F0F0F";
    document.getElementById("feature1-box").style.border = "1.8px solid #05CAB600";
}

var checkBox = document.getElementById("feature2");
if (checkBox.checked === true){
    document.getElementById("feature2-box").style.backgroundColor = "#05CAB610";
    document.getElementById("feature2-box").style.color = "#05CAB6";
    document.getElementById("feature2-box").style.border = "1.8px solid #05CAB6";
} else {
    document.getElementById("feature2-box").style.backgroundColor = "#fff";
    document.getElementById("feature2-box").style.color = "#0F0F0F";
    document.getElementById("feature2-box").style.border = "1.8px solid #05CAB600";
}

var checkBox = document.getElementById("feature3");
if (checkBox.checked === true){
    document.getElementById("feature3-box").style.backgroundColor = "#05CAB610";
    document.getElementById("feature3-box").style.color = "#05CAB6";
    document.getElementById("feature3-box").style.border = "1.8px solid #05CAB6";
} else {
    document.getElementById("feature3-box").style.backgroundColor = "#fff";
    document.getElementById("feature3-box").style.color = "#0F0F0F";
    document.getElementById("feature3-box").style.border = "1.8px solid #05CAB600";
}

var checkBox = document.getElementById("feature4");
if (checkBox.checked === true){
    document.getElementById("feature4-box").style.backgroundColor = "#05CAB610";
    document.getElementById("feature4-box").style.color = "#05CAB6";
    document.getElementById("feature4-box").style.border = "1.8px solid #05CAB6";
} else {
    document.getElementById("feature4-box").style.backgroundColor = "#fff";
    document.getElementById("feature4-box").style.color = "#0F0F0F";
    document.getElementById("feature4-box").style.border = "1.8px solid #05CAB600";
}

var checkBox = document.getElementById("feature5");
if (checkBox.checked === true){
    document.getElementById("feature5-box").style.backgroundColor = "#05CAB610";
    document.getElementById("feature5-box").style.color = "#05CAB6";
    document.getElementById("feature5-box").style.border = "1.8px solid #05CAB6";
} else {
    document.getElementById("feature5-box").style.backgroundColor = "#fff";
    document.getElementById("feature5-box").style.color = "#0F0F0F";
    document.getElementById("feature5-box").style.border = "1.8px solid #05CAB600";
}

var checkBox = document.getElementById("feature6");
if (checkBox.checked === true){
    document.getElementById("feature6-box").style.backgroundColor = "#05CAB610";
    document.getElementById("feature6-box").style.color = "#05CAB6";
    document.getElementById("feature6-box").style.border = "1.8px solid #05CAB6";
} else {
    document.getElementById("feature6-box").style.backgroundColor = "#fff";
    document.getElementById("feature6-box").style.color = "#0F0F0F";
    document.getElementById("feature6-box").style.border = "1.8px solid #05CAB600";
}

var checkBox = document.getElementById("feature7");
if (checkBox.checked === true){
    document.getElementById("feature7-box").style.backgroundColor = "#05CAB610";
    document.getElementById("feature7-box").style.color = "#05CAB6";
    document.getElementById("feature7-box").style.border = "1.8px solid #05CAB6";
} else {
    document.getElementById("feature7-box").style.backgroundColor = "#fff";
    document.getElementById("feature7-box").style.color = "#0F0F0F";
    document.getElementById("feature7-box").style.border = "1.8px solid #05CAB600";
}

var checkBox = document.getElementById("feature8");
if (checkBox.checked === true){
    document.getElementById("feature8-box").style.backgroundColor = "#05CAB610";
    document.getElementById("feature8-box").style.color = "#05CAB6";
    document.getElementById("feature8-box").style.border = "1.8px solid #05CAB6";
} else {
    document.getElementById("feature8-box").style.backgroundColor = "#fff";
    document.getElementById("feature8-box").style.color = "#0F0F0F";
    document.getElementById("feature8-box").style.border = "1.8px solid #05CAB600";
}
