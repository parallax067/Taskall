const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

nextBtn.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1;
  }

  slides[currentSlide].classList.add('active');

  if (currentSlide === slides.length - 1) {
    nextBtn.style.display = 'none';
  }
});


