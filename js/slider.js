// document.addEventListener('DOMContentLoaded', function () {
//   new Splide("#about-pictures", {
//     perPage: 2,
//     rewind : true,
//     flickMaxPages: number = 1,
//   }).mount();
// });

document.addEventListener('DOMContentLoaded', function () {
  new Splide("#speakers-list", {
    // perPage: 3,
    // rewind : true,
    type   : 'loop',
    perPage: 2,
    perMove: 1,
  }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide("#sponsors-list", {
      perMove: 1,
  }).mount();
});

  
  document.addEventListener('DOMContentLoaded', function () {
    new Splide("#top-photos", {
        type   : 'loop',
        perPage: 4,
        perMove: 1,
    }).mount();
  });

  document.addEventListener('DOMContentLoaded', function () {
    new Splide("#bottom-photos", {
        type   : 'loop',
        perPage: 5,
        perMove: 1,
        padding: '65%',
    }).mount();
  });

