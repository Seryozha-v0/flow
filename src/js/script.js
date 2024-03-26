import { tns } from 'tiny-slider/src/tiny-slider';

document.addEventListener('DOMContentLoaded', () => {
  tns({
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
  });

  const team = document.querySelector('.team');
  const prevBtn = team.querySelector('.team__prev .btn');
  const nextBtn = team.querySelector('.team__next .btn');

  const teamCarousel = tns({
    container: '.team__carousel',
    mode: 'carousel',
    items: 4,
    nav: false,
    controls: false,
    mouseDrag: true,
    loop: false,
    fixedWidth: 312,
    gutter: 32,
  });

  const checkSlides = (e) => {
    const { displayIndex, items, slideCount } = e;

    if (displayIndex === 1) {
      prevBtn.disabled = true;
      return;
    }

    prevBtn.removeAttribute('disabled');

    if (displayIndex > (slideCount - items)) {
      nextBtn.disabled = true;
      return;
    }

    nextBtn.removeAttribute('disabled');
  };

  teamCarousel.events.on('indexChanged', checkSlides);

  prevBtn.onclick = () => {
    teamCarousel.goTo('prev');
  };

  nextBtn.onclick = () => {
    teamCarousel.goTo('next');
  };
});
