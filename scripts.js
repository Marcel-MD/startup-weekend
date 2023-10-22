// You can also add navigation buttons or indicators for user control1
const images = document.querySelectorAll(".main-banner img");
let currentImageIndex = 0;

function toggleImages() {
    const currentImage = images[currentImageIndex];
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    const nextImage = images[nextImageIndex];

    currentImage.style.opacity = 0;
    nextImage.style.opacity = 1;

    currentImageIndex = nextImageIndex;

    setTimeout(toggleImages, 2000); // Change images every 2 seconds (adjust as needed)
}

toggleImages(); // Start the loop


//slider images