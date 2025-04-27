// Typing Animation
document.addEventListener('DOMContentLoaded', function () {

    function typePlaceholderLoop(elementId, text, typeSpeed = 100, deleteSpeed = 50, delayBeforeDelete = 1500, delayBeforeType = 500) {
    const input = document.getElementById(elementId);
    let index = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting) {
        input.placeholder = text.substring(0, index);
        index++;
        if (index > text.length) {
            isDeleting = true;
            setTimeout(type, delayBeforeDelete);
            return;
        }
        } else {
        input.placeholder = text.substring(0, index);
        index--;
        if (index < 0) {
            isDeleting = false;
            setTimeout(type, delayBeforeType);
            return;
        }
        }
        setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    }

    type();
    }
    typePlaceholderLoop('typing-input', 'Type astyping.com!', 100, 50, 1500, 500);
});

// Department Caraousel
const flkty = new Flickity('.carousel-department', {
    wrapAround: true,
    groupCells: 1,
    cellAlign: 'left',
    contain: true,
    pageDots: true,
    prevNextButtons: false
});

document.querySelector('.btn-prev').addEventListener('click', function () {
    flkty.previous();
});

document.querySelector('.btn-next').addEventListener('click', function () {
    flkty.next();
});

// Teacher Carousel
const teacherFlktyBox = new Flickity('.carousel-teacher-box', {
    wrapAround: true,
    groupCells: 1,
    cellAlign: 'left',
    contain: true,
    pageDots: true,
    prevNextButtons: false
});

document.querySelector('.btn-prev-teacher').addEventListener('click', function () {
    teacherFlktyBox.previous();
});

document.querySelector('.btn-next-teacher').addEventListener('click', function () {
    teacherFlktyBox.next();
});

// Extracurricular Carousel
const extracurricularFlktyBox = new Flickity('.carousel-extracurricular-box', {
    wrapAround: true,
    groupCells: 1,
    cellAlign: 'center',
    contain: true,
    pageDots: true,
    prevNextButtons: false
});

// Typing Test Script
const input = document.getElementById('typing-input');
const button = document.getElementById('typing-button');
const message = document.getElementById('message-typing');

input.addEventListener('input', function() {
  if (input.value.trim() === 'astyping.com') {
    button.disabled = false;
    message.style.display = 'none';
  } else {
    button.disabled = true;
    message.style.display = 'block';
  }
});

button.addEventListener('click', function() {
  window.location.href = 'https://astyping.com';
});

const miniGallery = new Flickity('.js-flickity', {
    wrapAround: true,
    autoPlay: false,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false,
    contain: true,
    freeScroll: true,
    imagesLoaded: true,
    draggable: false
});

function autoScroll() { // auto scroll manually
    miniGallery.x = (miniGallery.x - 1) % miniGallery.slideableWidth;
    miniGallery.positionSlider();
    requestAnimationFrame(autoScroll);
}
autoScroll();

// News Carousel
const newsFlktyBox = new Flickity('.carousel-news-box', {
    cellAlign: 'left',
    contain: true,
    groupCells: false,
    autoPlay: false,
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false
});

document.querySelector('.btn-news-prev').addEventListener('click', function () {
    newsFlktyBox.previous();
});

document.querySelector('.btn-news-next').addEventListener('click', function () {
    newsFlktyBox.next();
});

// Testimonial Carousel
const testimonialFlktyBox = new Flickity('.carousel-testimonial-box', {
    cellAlign: 'center',
    groupCells: 1,
    contain: true,
    wrapAround: true,
    pageDots: true, 
    prevNextButtons: false, 
});
