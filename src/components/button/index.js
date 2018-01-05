import $ from 'jquery';
import './_button.scss';

$('.js-button').on('click', function(){
  console.log('button clicked', this);
});
