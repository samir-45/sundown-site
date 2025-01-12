function moreAnimation() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    
    let fixed = document.querySelector(".fixed-image");
    let elemC = document.querySelector(".elem-container");
    elemC.addEventListener("mouseenter", function() {
    fixed.style.display = "block";
    })
    elemC.addEventListener("mouseleave", function() {
    fixed.style.display = "none";
    })
    
    
    
    
    let elems = document.querySelectorAll(".elem");
    
    elems.forEach(function(e) {
    e.addEventListener("mouseenter", function(){
        image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`
    })
    })
}


// --- Swiper js code --- 


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
      });
}

function menuAnimation(){
    let menu = document.querySelector("nav h3");
    let full = document.querySelector(".full-scr");
    let navimg = document.querySelector("nav img"); 
    let flag = 0;
   
    menu.addEventListener("click", function() {
       if(flag == 0){
           full.style.top = 0;
           navimg.style.opacity = 0;
           flag = 1;
       }else{
           full.style.top = "-100%";
           navimg.style.opacity = 1;
           flag = 0;
       }
    })
}


function loaderAnimation(){
    let loader = document.querySelector(".loader");

    setTimeout(function(){
   loader.style.top = "-100%"
    }, 4200)
   
   
}


swiperAnimation()
moreAnimation()
menuAnimation()
loaderAnimation()


  // Swiper js code end



