import { tns } from 'tiny-slider/src/tiny-slider';
import { CONTAINER_WIDTH } from './constants';

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
  accordionColl.forEach((accordion) => {
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
        }, 400);

        return;
      }

      wrapper.style.height = `${descr.clientHeight}px`;

      accordion.classList.add('accordion_active');
      setTimeout(() => {
        wrapper.removeAttribute('style');
      }, 400);
    };
  });

  window.onresize = (e) => {
    pageWidth = e.target.innerWidth;

    updateTeamCarousel();
  };
});
