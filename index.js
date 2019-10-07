const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const container = document.querySelector('.images')

let counter = 0;

prevBtn.addEventListener('click', nextSlide)
nextBtn.addEventListener('click', prevSlide)