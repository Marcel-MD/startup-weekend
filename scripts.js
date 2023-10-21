// JavaScript for the slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function slideTo(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(() => {
    slideTo(currentIndex + 1);
}, 3000); // Auto slide every 3 seconds

// You can also add navigation buttons or indicators for user control
