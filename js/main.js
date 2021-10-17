//HEADER DISPLAY
let hambBtn = document.querySelector('.hamb-btn');
let navigationMenu = document.querySelector('.navigation');
hambBtn.addEventListener('click', () => {
  navigationMenu.classList.toggle('navigation-display');
  
})

//FIXED HEADER

window.onscroll = function() {
  mobileFixedHeader()
  fixedHeader()
};


var header = document.querySelector(".navigation");


var sticky = header.offsetTop;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

//FIXED HEADER FOR MOBILE




var headerMobile = document.querySelector("#header");


var stickyMobile = headerMobile.offsetTop;

function mobileFixedHeader() {
  if(document.body.clientWidth < 575){
    if (window.pageYOffset > stickyMobile) {
      headerMobile.style.position="fixed";
      headerMobile.classList.add("header-sticky");
  
    } else {
      headerMobile.classList.remove("header-sticky");
      headerMobile.style.position="relative";
  
    }
  }else{
    headerMobile.classList.remove("header-sticky");
    headerMobile.style.position="relative";
  }
  
}
//back to top
let backTopBtn = document.querySelector('.back-top')
window.addEventListener('scroll',() =>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTopBtn.style.opacity = "1";
  } else {
    backTopBtn.style.opacity = "0";
  }
})
//HOME SECTION 5 CAROUSEL
$(function(){
  $('.home-section-5-carousel').slick({
    dots: false,
    infinite: true,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})

//about SECTION 4 CAROUSEL
$(function(){
  $('.about-section-4-carousel').slick({
    dots: false,
    infinite: true,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})

//about SECTION 7 CAROUSEL
$(function(){
  $('.about-section-7-carousel').slick({
    dots: false,
    infinite: true,
    prevArrow: ".arrow-prev-2",
    nextArrow: ".arrow-next-2",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})
//quick and tips
let quickBtns = [...document.querySelectorAll('.home-section-7-wrap-a .plusImg')]
let quickBtnsAbout = [...document.querySelectorAll('.about-section-6-wrap-a .plusImg')]

function displayBdiv(){
  if(this.className.includes('plusImg')){
    this.classList.remove('plusImg');
    this.classList.add('minusImg')
    this.src="images/home/minus-sign.png";
    this.parentNode.classList.add('active-parent')
    this.parentNode.nextElementSibling.classList.add('active');
  }
  else if(this.className.includes('minusImg')){
    this.classList.remove('minusImg');
    this.classList.add('plusImg')
    this.src="images/home/plus.png";
    this.parentNode.classList.remove('active-parent')
    this.parentNode.nextElementSibling.classList.remove('active');
  }
}

quickBtns.forEach(quickBtn => quickBtn.addEventListener('click', displayBdiv))
quickBtnsAbout.forEach(quickBtn => quickBtn.addEventListener('click', displayBdiv))
