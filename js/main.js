/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 514:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ 322:
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
  console.log('load');
});

/***/ }),

/***/ 648:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/authors/alexander.jpg";

/***/ }),

/***/ 749:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/blog/panels.jpg";

/***/ }),

/***/ 254:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/carousel/1.jpg";

/***/ }),

/***/ 734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/carousel/2.jpg";

/***/ }),

/***/ 195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/carousel/3.jpg";

/***/ }),

/***/ 360:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/carousel/4.jpg";

/***/ }),

/***/ 269:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/carousel/5.jpg";

/***/ }),

/***/ 374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/charger/map.jpg";

/***/ }),

/***/ 873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/header/man.jpg";

/***/ }),

/***/ 717:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ 187:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/partners/Logo-1.svg";

/***/ }),

/***/ 448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/partners/Logo-2.svg";

/***/ }),

/***/ 689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/partners/Logo-3.svg";

/***/ }),

/***/ 246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/partners/Logo-4.svg";

/***/ }),

/***/ 910:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/plugs/j-1772.svg";

/***/ }),

/***/ 947:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/team/henry.jpg";

/***/ }),

/***/ 375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/team/russell.jpg";

/***/ }),

/***/ 620:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/team/williamson.jpg";

/***/ }),

/***/ 861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/team/wilson.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(514);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/pages/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(717), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(873), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(374), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(910), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(187), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(448), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(689), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(246), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(254), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(734), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(195), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(360), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(269), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(861), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(620), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(947), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(375), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(749), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(648), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = getUrl_default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = getUrl_default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = getUrl_default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = getUrl_default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = getUrl_default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = getUrl_default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = getUrl_default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = getUrl_default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = getUrl_default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = getUrl_default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = getUrl_default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = getUrl_default()(___HTML_LOADER_IMPORT_18___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <title>index</title> </head> <body> <header class=\"header\"> <div class=\"container\"> <div class=\"header__wrapper\"> <div class=\"logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" class=\"logo__icon\" alt=\"flow logotype\"/> </div> <nav> <ul class=\"menu\"> <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">About us</a> </li> <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">Team</a> </li> <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">Solutions</a> </li> <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">Blog</a> </li> </ul> </nav> <button class=\"btn btn_primary\"> Get in touch <span class=\"flowIcon flowIcon_arrow-right\"></span> </button> </div> </div> </header> <section class=\"promo\"> <div class=\"container\"> <div class=\"promo__content\"> <div class=\"caption\"> Powering Tomorrow </div> <h1>The Future of Green Energy</h1> <p>Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</p> <div class=\"promo__btns\"> <button class=\"btn btn_primary\">See our solutions</button> <button class=\"btn btn_outline\">Get in touch</button> </div> </div> <div class=\"promo__graphic\"> <div class=\"promo__wrapper\"> <div class=\"promo__background\"> <div class=\"promo__img-wrapper\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"charger\"> </div> </div> <div class=\"promo__charger-wrapper\"> <div class=\"charger\"> <div class=\"charger__location\"> <div class=\"charger__map\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Sherman Way Parking\"/> </div> <div class=\"charger__descr\"> <div class=\"charger__name\">Sherman Way Parking</div> <div class=\"charger__address\">18711 Sherman Way, Reseda, CA 91335, USA</div> </div> </div> <div class=\"charger__plugs-wrapper\"> <div class=\"plugs\"> <div class=\"plugs__title\">Plugs</div> <ul class=\"plugs__list\"> <li class=\"plugs__item\"> <div class=\"plugs__type\"> <div class=\"plugs__icon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"flowIcon__img\"/> </div> <div class=\"plugs__name\">J-1772</div> </div> <div class=\"plugs__badges\"> <div class=\"badge badge_orange\">7.2 kW</div> <div class=\"badge badge_green\">1 available</div> </div> </li> </ul> </div> </div> </div> </div> </div> </div> </div> </section> <section class=\"partners\"> <div class=\"container\"> <div class=\"partners__wrapper\"> <div class=\"partners__label\">Global partners that trusted us</div> <ul class=\"partners__list\"> <li class=\"partners__item\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"logoipsum\"/> </li> <li class=\"partners__item\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"logoipsum\"/> </li> <li class=\"partners__item\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"logoipsum\"/> </li> <li class=\"partners__item\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"logoipsum\"/> </li> </ul> </div> </div> </section> <section class=\"solutions\"> <div class=\"container\"> <div class=\"caption\"> Solutions </div> <div class=\"title\"> Key to clean future </div> <ul class=\"solutions__list\"> <li class=\"solutions__item\"> <div class=\"flowIcon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"flowIcon__img\"/> </div> <div class=\"solutions__content\"> <div class=\"solutions__title\">EV charging</div> <div class=\"solutions__descr\">EVs use electricity as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transportation sector.</div> </div> <a href=\"#\" class=\"btn btn_link\">Read more</a> </li> </ul> </div> </section> <section class=\"about\"> <div class=\"container\"> <div class=\"about__wrapper\"> <div class=\"title\"> About us </div> <div class=\"about__content\"> <div class=\"about__descr\"> At Flow, we're committed to a sustainable future. As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously. </div> <a href=\"#\" class=\"btn btn_primary\">Read more</a> </div> </div> </div> <div class=\"about__carousel\"> <div class=\"about__item\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"A solar panel\" class=\"about__img\"/> </div> <div class=\"about__item\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Nature\" class=\"about__img\"/> </div> <div class=\"about__item\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Wind station\" class=\"about__img\"/> </div> <div class=\"about__item\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Electrocar\" class=\"about__img\"/> </div> <div class=\"about__item\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Wave\" class=\"about__img\"/> </div> </div> </section> <section class=\"statistic\"> <div class=\"container\"> <ul class=\"statistic__list\"> <li class=\"statistic__item\"> <div class=\"statistic__value\">5,000 Mwh</div> <div class=\"statistic__caption\">Renewable Energy Generated</div> </li> <li class=\"statistic__item\"> <div class=\"statistic__value\">2,500+</div> <div class=\"statistic__caption\">Metric Tons of CO2 Reduced</div> </li> <li class=\"statistic__item\"> <div class=\"statistic__value\">10,000+</div> <div class=\"statistic__caption\">Customers Served</div> </li> <li class=\"statistic__item\"> <div class=\"statistic__value\">15%</div> <div class=\"statistic__caption\">Avg. Energy Saved</div> </li> </ul> </div> </section> <section class=\"team\"> <div class=\"container\"> <div class=\"team__header\"> <div class=\"team__wrapper\"> <div class=\"title\"> About us </div> <div class=\"descr\"> Our team boasts top green energy experts, driving innovation in sustainability. </div> </div> <div class=\"team__controls\"> <div class=\"team__prev\"></div> <div class=\"team__next\"></div> </div> </div> <div class=\"team__carousel\"> <div class=\"team__person\"> <div class=\"team__picture\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Willson\"/> </div> <div class=\"team__info\"> <div class=\"team__name\">Jenny Wilson</div> <div class=\"team__position\">Senior Sustainability Consultant</div> </div> </div> <div class=\"team__person\"> <div class=\"team__picture\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Williamson\"/> </div> <div class=\"team__info\"> <div class=\"team__name\">Cameron Williamson</div> <div class=\"team__position\">Senior Sustainability Consultant</div> </div> </div> <div class=\"team__person\"> <div class=\"team__picture\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Henry\"/> </div> <div class=\"team__info\"> <div class=\"team__name\">Courtney Henry</div> <div class=\"team__position\">Energy Analysts</div> </div> </div> <div class=\"team__person\"> <div class=\"team__picture\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"Russell\"/> </div> <div class=\"team__info\"> <div class=\"team__name\">Dianne Russell</div> <div class=\"team__position\">Senior Renewable Energy Engineer</div> </div> </div> </div> </div> </section> <section class=\"cta\"> <div class=\"container\"> <div class=\"title\"> About us </div> <div class=\"descr\"> Our commitment to green energy is paving the way for a cleaner, healthier planet. </div> <button class=\"btn btn_outline\">Get in touch</button> </div> <div class=\"cta__wrapper\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"charger\" class=\"cta__picture\"> </div> </section> <section class=\"blog\"> <div class=\"container\"> <div class=\"blog__header\"> <div class=\"title\"> Blog </div> <a href=\"#\" class=\"btn btn_outline\">See all</a> </div> <div class=\"blog__content\"> <article class=\"blog__item\"> <div class=\"blog__preview\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"Harnessing the Power of the Sun: Exploring the World of Solar Energy\" class=\"blog__img\"/> </div> <div class=\"blog__badges\"> <div class=\"badge\">Solar Power</div> <div class=\"badge\">Solutions</div> </div> <h3> Harnessing the Power of the Sun: Exploring the World of Solar Energy </h3> <p> Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future. </p> <div class=\"blog__footer\"> <div class=\"blog__author\"> <div class=\"blog__avatar\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Leslie Alexander - author\"/> </div> Leslie Alexander </div> <div class=\"blog__divider\"></div> <div class=\"blog__created\"> 9 min read </div> </div> </article> </div> </div> </section> <section class=\"faq\"> <div class=\"container\"> <div class=\"title title_center\"> FAQ </div> <div class=\"descr\"> Here you will find the answers to the frequently asked questions. </div> <ul class=\"faq__list\"> <li class=\"faq__item\"> <div class=\"faq__header\"> <div class=\"faq__title\">What is green energy?</div> <div class=\"faq__icon\">+</div> </div> <div class=\"faq__wrapper\"> <div class=\"faq__descr\"> Green energy, also known as renewable energy, is derived from natural sources that are replenished on a human timescale. This includes solar, wind, hydro, geothermal, and biomass energy, among others. </div> </div> </li> </ul> <div class=\"contact\"> <div class=\"flowIcon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"flowIcon__img\"/> </div> <div class=\"contact__title\">Still have questions?</div> <div class=\"contacct__descr\"> For assistance, please visit our Contact Us page or call our customer support hotline at (671) 555-0110. Our dedicated team is ready to help you on your journey to a greener, more sustainable future. </div> </div> </div> </section> <section class=\"reviews\"> <div class=\"container\"> <div class=\"title\"> What our customers say </div> <div class=\"descr\"> Thousands of happy customers that changed their energy use </div> <div class=\"reviews__carousel\"> <div class=\"review\"> <div class=\"review__stars\"> <div class=\"review__star\"></div> <div class=\"review__star\"></div> <div class=\"review__star\"></div> <div class=\"review__star\"></div> <div class=\"review__star\"></div> </div> <div class=\"review__text\"> “Flow transformed my energy use. Efficient, green tech, outstanding service!” </div> <div class=\"review__author\"> <div class=\"review__name\">Jenny Wilson</div> <div class=\"review__company\">Solar energy service</div> </div> </div> <div class=\"reviews__nav\"> <button class=\"reviews__prev\"> </button></div> <button class=\"reviews__next\"></button> </div> </div>  </section> <section class=\"subscription\"> <div class=\"container\"> <div class=\"subscription__wrapper\"> <div class=\"title\"> Your Source for Green Energy Updates </div> <form class=\"form\"> <div class=\"form__input\"> <input type=\"email\" placeholder=\"Your e-mail...\"/> </div> <button class=\"btn btn_outline\">Get in touch</button> </form> </div> </div> </section> </body> </html>";
// Exports
/* harmony default export */ const pages = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/pages/pages.js

// EXTERNAL MODULE: ./src/js/script.js
var script = __webpack_require__(322);
;// CONCATENATED MODULE: ./src/index.js



})();

/******/ })()
;