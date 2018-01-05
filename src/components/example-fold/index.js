import $ from 'jquery';
import enquire from 'enquire.js';
import breakpoints from '../../js/breakpoints';
import './_example-fold.scss';
import '../../js/fold';

const higlightedElements = $('.js-example-fold--highlight');

function onSmall(){
  console.log('on');
  higlightedElements.fold();
}

function offSmall(){
  higlightedElements.fold('restore');
  console.log('off');
}

onSmall();

setTimeout(offSmall, 900);

// Note: other options are setup, destroy, deferSetup
enquire.register(`screen and (max-width:${breakpoints.small}px)`, {
  match: onSmall,
  unmatch: offSmall
});
