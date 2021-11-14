
//main swiper
const mainSwiper = new Swiper('.main-swiper', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//熱門打卡景點 swiper
const spotSwiper = new Swiper('.spot-swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
});

//一再回訪美食 swiper
const foodSwiper = new Swiper('.food-swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
});