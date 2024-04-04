import { tns } from 'tiny-slider/src/tiny-slider';
import { CONTAINER_WIDTH, TRANSITION_DFLT } from './constants';

document.addEventListener('DOMContentLoaded', () => {
  let pageWidth = window.innerWidth;

  const aboutOprtions = {
    container: '.about__carousel',
    mode: 'carousel',
    items: 5,
    nav: false,
    controls: false,
    mouseDrag: true,
    center: true,
    loop: true,
    freezable: false,
    fixedWidth: 280,
    gutter: 32,
    responsive: {
      425: {
        item: 1,
      },
      768: {
        item: 3,
      },
    },
  };

  tns(aboutOprtions);

  const team = document.querySelector('.team');
  const prevBtn = team.querySelector('.team__prev .btn');
  const nextBtn = team.querySelector('.team__next .btn');

  let teamOptions = {
    container: '.team__carousel',
    mode: 'carousel',
    items: 4,
    nav: false,
    controls: false,
    mouseDrag: true,
    loop: false,
    freezable: false,
    fixedWidth: 312,
    gutter: 32,
  };

  let teamCarousel;

  const checkSlides = (e) => {
    const { displayIndex, items, slideCount } = e;

    prevBtn.removeAttribute('disabled');

    if (displayIndex <= 1) {
      prevBtn.disabled = true;
    }

    if (displayIndex > (slideCount - items)) {
      nextBtn.disabled = true;
      return;
    }

    nextBtn.removeAttribute('disabled');
  };

  const createTeamCarousel = () => {
    const teamPadding = pageWidth <= CONTAINER_WIDTH ? 0 : (pageWidth - CONTAINER_WIDTH - 30) / 2;
    teamCarousel = tns({ ...teamOptions, edgePadding: teamPadding });

    teamCarousel.events.on('indexChanged', checkSlides);

    prevBtn.onclick = () => {
      teamCarousel.goTo('prev');
    };

    nextBtn.onclick = () => {
      teamCarousel.goTo('next');
    };
  };

  createTeamCarousel();

  const updateTeamCarousel = () => {
    const { displayIndex } = teamCarousel.getInfo();

    teamOptions = {
      ...teamOptions,
      startIndex: displayIndex - 1,
    };

    teamCarousel.destroy();
    createTeamCarousel();
  };

  const blog = document.querySelector('.blog');
  const blogItems = blog.querySelectorAll('.blog__item');

  blogItems.forEach((item) => {
    const descr = item.querySelector('.blog__descr');
    if (!descr) return;

    const text = descr.innerText;

    if (text.length <= 160) return;

    descr.textContent = `${text.substr(0, 160).replace(/\s+\S*$/, '')}…`;
  });

  const accordionColl = document.querySelectorAll('.accordion');
  accordionColl.forEach((item) => {
    const accordion = item;

    accordion.onclick = () => {
      const wrapper = accordion.querySelector('.accordion__wrapper');
      const descr = accordion.querySelector('.accordion__descr');

      if (accordion.classList.contains('accordion_active')) {
        wrapper.style.height = `${descr.clientHeight}px`;

        setTimeout(() => {
          wrapper.style.height = '0px';
          accordion.classList.remove('accordion_active');
        }, 0);

        setTimeout(() => {
          wrapper.removeAttribute('style');
          accordion.classList.remove('accordion_active');
        }, TRANSITION_DFLT);

        return;
      }

      wrapper.style.height = `${descr.clientHeight}px`;

      accordion.classList.add('accordion_active');
      setTimeout(() => {
        wrapper.removeAttribute('style');
      }, TRANSITION_DFLT);
    };
  });

  const reviewsOptions = {
    container: '.reviews__carousel',
    items: 1,
    nav: false,
    controls: false,
    mouseDrag: false,
    center: true,
    fixedWidth: 800,
    responsive: {
      0: {
        item: 1,
        fixedWidth: false,
        center: false,
        edgePadding: 15,
      },
      1085: {
        fixedWidth: 800,
      },
    },
  };

  const reviewsCarousel = tns(reviewsOptions);

  const reviews = document.querySelector('.reviews');
  const prevReviewsBtn = reviews.querySelector('.reviews__prev .btn');
  const nextReviewsBtn = reviews.querySelector('.reviews__next .btn');

  prevReviewsBtn.onclick = () => {
    reviewsCarousel.goTo('prev');
  };

  nextReviewsBtn.onclick = () => {
    reviewsCarousel.goTo('next');
  };

  const handleActiveSlides = () => {
    reviews.querySelector('.reviews__carousel_prevSlide')?.classList.remove('reviews__carousel_prevSlide');
    reviews.querySelector('.reviews__carousel_nextSlide')?.classList.remove('reviews__carousel_nextSlide');

    const reviewSlidesActiveColl = reviews.querySelectorAll('.tns-slide-active');

    if (reviewSlidesActiveColl.length < 3) return;

    const reviewPrevSlide = reviewSlidesActiveColl[0];
    const reviewNextSlide = reviewSlidesActiveColl[2];

    reviewPrevSlide.classList.add('reviews__carousel_prevSlide');
    reviewNextSlide.classList.add('reviews__carousel_nextSlide');
  };

  handleActiveSlides();

  reviewsCarousel.events.on('indexChanged', handleActiveSlides);

  const handleWindowHeight = () => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  handleWindowHeight();

  const burgerBtn = document.querySelector('.burgerBtn');
  const navEl = document.querySelector('.nav');
  const html = document.querySelector('html');

  burgerBtn.onclick = () => {
    if (burgerBtn.classList.contains('burgerBtn_active')) {
      burgerBtn.classList.remove('burgerBtn_active');

      navEl.classList.add('nav_show');
      navEl.classList.remove('nav_active');

      html.style.removeProperty('overflow');

      setTimeout(() => {
        navEl.classList.remove('nav_show');
      }, TRANSITION_DFLT);

      return;
    }

    html.style.overflow = 'hidden';

    burgerBtn.classList.add('burgerBtn_active');
    navEl.classList.add('nav_show');

    setTimeout(() => {
      navEl.classList.add('nav_active');
      navEl.classList.remove('nav_show');
    }, 0);
  };

  const header = document.querySelector('.header');
  const spaceBox = document.createElement('div');

  const handleHeaderSticky = () => {
    if (window.scrollY < 200) {
      header.classList.remove('header_sticky');
      spaceBox.remove();
    }

    if (window.scrollY > 200 && !header.classList.contains('header_sticky')) {
      spaceBox.style.height = `${header.offsetHeight}px`;

      header.classList.add('header_show');
      header.insertAdjacentElement('beforebegin', spaceBox);

      setTimeout(() => {
        header.classList.add('header_sticky');
        header.classList.remove('header_show');
      }, 0);
    }

    if (!header.classList.contains('header_sticky') && header.offsetHeight === spaceBox.offsetHeight) return;

    spaceBox.style.height = `${header.offsetHeight}px`;
  };

  window.onscroll = () => {
    handleHeaderSticky();
  };

  window.onresize = (e) => {
    pageWidth = e.target.innerWidth;

    updateTeamCarousel();
    handleHeaderSticky();
    handleWindowHeight();
  };
});
