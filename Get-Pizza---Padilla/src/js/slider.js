const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

let index = 0;

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

//3 seconds
setInterval(nextSlide, 3000);
