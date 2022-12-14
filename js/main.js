$(function () {
  var mixer = mixitup('.directions__programs-list');

  $('.directions__filtre').on('click', () => {
    $('.directions__filtre').removeClass('directions__filtre--active');
    $(this).addClass('directions__filtre--active');
  });

  // sliders settings

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    appendArrows: $('.team__slider-arrows'),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    draggable: false,
    appendDots: $('.testimonials__dots'),
  });

  // sliders arrow functionality

  $('.team__slider-prev').on('click', (e) => {
    e.preventDefault();
    $('.team__slider').slick('slickPrev');
  });

  $('.team__slider-next').on('click', (e) => {
    e.preventDefault();
    $('.team__slider').slick('slickNext');
  });

  $('.testimonials__prev').on('click', (e) => {
    e.preventDefault();
    $('.testimonials__slider').slick('slickPrev');
  });

  $('.testimonials__next').on('click', (e) => {
    e.preventDefault();
    $('.testimonials__slider').slick('slickNext');
  });
});

// acardeon self made function

$('.program__acordeon-item').on('click', (e) => {
  e.preventDefault();
  $('.program__acordeon-item').removeClass('program__acordeon-item--active');
  $(e.target).closest('.program__acordeon-item').addClass('program__acordeon-item--active');
});

$('.burger, .overlay').on('click', (e) => {
  e.preventDefault();
  $('.header__top').toggleClass('header__top--open');
  $('.overlay').toggleClass('overlay--active');
});

let scroling = false;

window.addEventListener('scroll', () => {
  scroling = true;
});

setInterval(() => {
  if (scroling) {
    scroling = false;
    if ($(window).scrollTop() > 0) {
      $('.burger').addClass('burger--follow');
    } else {
      $('.burger').removeClass('burger--follow');
    }
  }
}, 600);

$();
