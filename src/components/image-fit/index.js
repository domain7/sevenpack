import $ from 'jquery';
import './_image-fit.scss';

// Fallback for browsers that do not support objectFit
if ('objectFit' in document.documentElement.style === false) {
  $('.js-image-fit').each(function(){
    const $image = $(this).find('img');

    $image.css({
      'background-image': `url("${$image.attr('src')}")`,
      'background-position': '50% 50%',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
    })
    .attr('src', `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${$image.width()}' height='${$image.height()}'%3E%3C/svg%3E`)
    .removeAttr('srcset');
  });
}
