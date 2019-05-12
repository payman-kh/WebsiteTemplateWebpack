export const getNumber = (a, b) => {
    return  Math.ceil(Math.random() * (a - b) + b); 
 }


/* ascertain the number of customer reviews per window width on load */ 
/*------------------------------------------------------------*/
let slidesPerView;
const windowWidth = document.body.clientWidth;
if (windowWidth >= 1280) slidesPerView = 4;
else if (windowWidth >= 1022 && windowWidth < 1280) slidesPerView = 3;
else if (windowWidth >= 850 && windowWidth < 1022) slidesPerView = 2;
else slidesPerView = 1;

export const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: slidesPerView,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
/*------------------------------------------------------------*/
