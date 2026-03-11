const swiper = new Swiper('#vegScroll', {
    loop: true,
    direction: 'vertical',
    slidesPerView: 5.5,
    centeredSlides: true,
    mousewheel: {
        forceToAxis: true,
        releaseOnEdges: false,
        sensitivity: 0.5,

    },
    freeMode: {
        enabled: true,
        sticky: true,
        momentum: true,
        momentumVelocityRatio: 1,

    },
    spaceBetween: 30,
    initialSlide: 3,
});


const images = document.querySelectorAll('.veg-image img');


swiper.on('slideChange', () => {

    const activeSlide = swiper.slides[swiper.activeIndex];
    const name = activeSlide.dataset.name;


    images.forEach(img => {
        img.classList.toggle('active', img.dataset.name === name);
    });


    swiper.slides.forEach(slide => {
        slide.classList.toggle('active', slide === activeSlide);
    });
});


images[0].classList.add('active');