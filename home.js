let scrollAmount = 0;
const scrollStep = 300;

function scrollLeft() {
    const carousel = document.querySelector('.carousel');
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    carousel.style.transform = translateX( '${scrollAmount}px');
}

function scrollRight() {
    const carousel = document.querySelector('.carousel');
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    scrollAmount += scrollStep;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    carousel.style.transform = translateX( '${scrollAmount}px');
}
// koki

// koki