"use strict";

//main swiper
var mainSwiper = new Swiper('.main-swiper', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); //熱門打卡景點 swiper

var spotSwiper = new Swiper('.spot-swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30
}); //一再回訪美食 swiper

var foodSwiper = new Swiper('.food-swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30
});
//# sourceMappingURL=all.js.map
