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
    fixedWidth: 280,
    gutter: 32,
  });
});
