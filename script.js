

//vegetables scroll

const swiper = new Swiper('#vegScroll', {
    loop: true,
    direction: 'vertical',
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 40,
    initialSlide: 3,

    speed: 800,

    mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
    },

    freeMode: {
        enabled: true,
        sticky: true,
        momentum: true,
        momentumRatio: 0.5,
        momentumVelocityRatio: 0.6,
        momentumBounce: false
    },

    watchSlidesProgress: true,
    resistanceRatio: 0.85,
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



//nav-toggle


const navToggle = document.getElementById('nav-toggle');
const navItems = document.querySelector('.nav-items');

navToggle.addEventListener('click', () => {
    navItems.classList.toggle('active');
});
