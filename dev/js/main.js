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

//-------------//
//Swiper config//
//-------------//
