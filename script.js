//nav-toggle


const navToggle = document.getElementById('nav-toggle');
const navItems = document.querySelector('.nav-items');

navToggle.addEventListener('click', () => {
  navItems.classList.toggle('active');
});







// Slider
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".scroll-track");
  const slides = Array.from(track.children);
  const buttons = document.querySelectorAll(".btn-div button");
  const container = document.querySelector(".scroll-container");
  const totalSlides = slides.length;
  let current = 0;
  let interval;

  function fadeInTitle(index) {
    const titles = document.querySelectorAll(".scroll-title");

    titles.forEach((t, i) => {
      t.style.opacity = i === index ? "1" : "0";
      t.style.transition = "opacity 5s ease";
    });
  }

  function updateButtons(index) {
    buttons.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
  }

  function showSlide(index) {
    track.style.transition = "none";
    track.style.transform = `translateX(-${index * 100}%)`;
    fadeInTitle(index);
    updateButtons(index);
  }

  function startAutoFlick() {
    interval = setInterval(() => {
      current = (current + 1) % totalSlides;
      showSlide(current);
    }, 5000);
  }

  function stopAutoFlick() {
    clearInterval(interval);
  }

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      current = index;
      showSlide(current);
    });
  });

  container.addEventListener("mouseenter", stopAutoFlick);
  container.addEventListener("mouseleave", startAutoFlick);

  showSlide(current);
  startAutoFlick();
});




//regenerate-item animation

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  const leafContainer = document.querySelector('.leaf-container');
  if (leafContainer) {
    observer.observe(leafContainer);
  }
});






// Techscroll
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".tech-scroll-track");
  const slides = Array.from(track.children);
  const buttons = document.querySelectorAll(".tech-btn-wrap button");
  const container = document.querySelector(".tech-scroll-container");
  const totalSlides = slides.length;
  let current = 0;
  let interval;

  function fadeInTitle(index) {
    const titles = document.querySelectorAll(".tech-card-title");

    titles.forEach((t, i) => {
      t.style.opacity = i === index ? "1" : "0";
      t.style.transition = "opacity 5s ease";
    });
  }

  function updateButtons(index) {
    buttons.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
  }

  function showSlide(index) {
    track.style.transition = "none";
    track.style.transform = `translateX(-${index * 100}%)`;
    fadeInTitle(index);
    updateButtons(index);
  }

  function startAutoFlick() {
    interval = setInterval(() => {
      current = (current + 1) % totalSlides;
      showSlide(current);
    }, 2000);
  }

  function stopAutoFlick() {
    clearInterval(interval);
  }

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      stopAutoFlick();
      current = index;
      showSlide(current);
      startAutoFlick();
    });
  });

  container.addEventListener("mouseenter", stopAutoFlick);
  container.addEventListener("mouseleave", startAutoFlick);

  showSlide(current);
  startAutoFlick();
});

//24 Carousel
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slide-track");
  const slides = Array.from(track.children);
  const bullets = document.querySelectorAll(".cust-bullet .bullet");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let current = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    track.style.transition = "none";
    track.style.transform = `translateX(-${index * 100}vw)`;

    bullets.forEach((b, i) => b.classList.toggle("active", i === index));
  }

  leftArrow.addEventListener("click", () => {
    current = (current + 1) % totalSlides;
    showSlide(current);
  });

  rightArrow.addEventListener("click", () => {
    current = (current - 1 + totalSlides) % totalSlides;
    showSlide(current);
  });

  bullets.forEach((b, i) => {
    b.addEventListener("click", () => {
      current = i;
      showSlide(current);
    });
  });

  showSlide(current);
});

//vegetables scroll

const swiper = new Swiper('#vegScroll', {
  loop: true,
  direction: 'vertical',
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 30,
  initialSlide: 3,
  speed: 100,

  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },

  freeMode: {
    enabled: true,
    sticky: true,           
    momentum: false,        
    momentumBounce: false,  
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


// Parallax
const potato = document.querySelector(".potato");
let offsetY = 0;
const nudgeAmount = 30;
const maxOffset = 60;

window.addEventListener("wheel", (e) => {
  const direction = e.deltaY > 0 ? 1 : -1;

  offsetY += direction * nudgeAmount;

  if (offsetY > maxOffset) offsetY = maxOffset;
  if (offsetY < -maxOffset) offsetY = -maxOffset;

  potato.style.backgroundPosition = `center calc(50% + ${offsetY}px)`;
});
