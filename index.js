const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const container = document.querySelector('.images')


let counter = 0;
nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)


function nextSlide(){
    if (counter === 4) {
        counter= -1;
    }
    counter++
    
    container.style.backgroundImage = `url(img/bcg-${counter}.jpeg)`
}
function prevSlide(){
    if (counter === 4) {
        counter= -1;
    }
    counter++
    
    container.style.backgroundImage = `url(img/bcg-${counter}.jpeg)`
}