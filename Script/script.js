const swiper = new Swiper(".swiper", {
  loop: true, // Infinite loop
  slidesPerView: 4, // Show 4 slides at a time
  spaceBetween: 20,
  autoplay: {
    delay: 0, // No delay between slides
    disableOnInteraction: false, // Keeps autoplay after user interaction
  },
  speed: 3000, // Controls how long it takes to slide to the next
  allowTouchMove: false, // Optional: disable user swiping
});
