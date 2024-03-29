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

  window.onresize = (e) => {
    pageWidth = e.target.innerWidth;

    updateTeamCarousel();
  };
});
