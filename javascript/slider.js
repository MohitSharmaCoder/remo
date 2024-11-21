// document.addEventListener("DOMContentLoaded", () => {
//     const swiper = new Swiper(".swiper", {
//       slidesPerView: 3, // Show 3 slides at a time
//       spaceBetween: 20, // Gap between slides
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       breakpoints: {
//         768: {
//           slidesPerView: 2, // Show 2 slides on tablets
//         },
//         480: {
//           slidesPerView: 1, // Show 1 slide on mobile
//         },
//       },
//     });
//   });
  
///////////////////////////////////////////////////////////////////////////
//   document.addEventListener("DOMContentLoaded", () => {
//     const swiper = new Swiper(".swiper", {
//       slidesPerView: 4, // Show 3 slides at a time
//       spaceBetween: 20, // Gap between slides
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true, // Enable clickable pagination dots
//       },
//       breakpoints: {
//         768: {
//           slidesPerView: 2, // Show 2 slides on tablets
//         },
//         480: {
//           slidesPerView: 1, // Show 1 slide on mobile
//         },
//       },
//     });
//   });
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 3, // Show 3 slides at a time
      spaceBetween: 20, // Gap between slides
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // Adjust slides for different screen sizes
        1024: {
          slidesPerView: 3, // Desktop: 3 slides
        },
        768: {
          slidesPerView: 2, // Tablet: 2 slides
        },
        600: {
          slidesPerView: 1, // Mobile: 1 slide
        },
      },
    });
  });
  