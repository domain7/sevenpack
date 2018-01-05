import $ from 'jquery';
import Swiper from 'swiper/dist/js/swiper.min.js';
import './_carousel.scss';
import 'swiper/dist/css/swiper.min.css'


const CAROUSEL_SELECTOR = '.js-carousel';
const CAROUSEL_NEXT_SELECTOR = '.carousel__button-next';
const CAROUSEL_PREV_SELECTOR = '.carousel__button-prev';
const carousels = [];


// INIT
// find every swiper selector and run the initiate function
$(CAROUSEL_SELECTOR).each(function() {
  initiateCarousel(this);
  console.log(this);
});


function initiateCarousel(element) {
  // set some common options for every carousel
  const options = {
    nextButton: CAROUSEL_NEXT_SELECTOR,
    prevButton: CAROUSEL_PREV_SELECTOR,
    buttonDisabledClass: 'is-disabled',
    slidesPerView: 1,
    slidesPerGroup: 1,
    a11y: true
  };

  // initialize the swiper and add it to the array
  const c = new Swiper(element, options);
  carousels.push(c);
  console.log(carousels);
}
