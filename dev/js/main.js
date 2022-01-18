  //-------------//
  //Swiper config//
  //-------------//

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    //autoplay
    autoplay: {
        delay: 3000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //fade
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
});

const swiperBeauty = new Swiper('.swiper-no-fade', {
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
      nextEl: '.swiperb-button-next',
      prevEl: '.swiperb-button-prev',
  },
})
//-------------//
//Swiper config//
//-------------//

//sticky nav on scroll
let nav = document.querySelector(".main-nav");
let annulation = window.innerHeight /2;
//initialisation de la valeur top à 0
let pageTop = 0;

//ajout de l'évent sur le scrolling de windows
window.addEventListener('scroll', () => {
    //compare pour la demi haut
    if(window.scrollY > annulation){
        nav.classList.add("sticky-nav");
    }else{
        nav.classList.remove("sticky-nav")
    }
    //compare pour la direction du scroll
    if(pageTop > window.scrollY){
      nav.classList.add("reveal")
    }else{
      nav.classList.add("sticky-nav")
      nav.classList.remove("reveal")
        console.log("scroll down");
    }
    pageTop = window.scrollY; 
})

