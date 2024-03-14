document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".offer__slide");
  const totalSlides = slides.length;
  let currentSlide = 0;
  let currentNumber = currentSlide + 1;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    currentNumber = currentSlide + 1;
    updateSliderCounter();
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    currentNumber = currentSlide + 1;
    updateSliderCounter();
    showSlide(currentSlide);
  }
  
  function updateSliderCounter() {
    document.getElementById('current').innerText = currentNumber.toString().padStart(2, '0');
  }

  const prevBtn = document.querySelector(".offer__slider-prev");
  const nextBtn = document.querySelector(".offer__slider-next");

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  showSlide(currentSlide);
  updateSliderCounter();
});
