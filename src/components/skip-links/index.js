/*
 * This module provides functionality for skip links to set focus on the destination
 */
import $ from 'jquery';
import './_skip-links.scss';

// A list of all skip-link hashes
const hashes = [];

function bindActions(){

  //Create array with all hash links
  $('.js-skip-link').each(function(){
    hashes.push(this.hash);
  });

  //Listen to hashchange event
  $(window).on('hashchange', function() {

    var hash = window.location.hash;

    // Check if the hash is from the .skip-links section
    // and if an element with that ID exists
    if ($.inArray(hash, hashes) !== -1 && $(hash).length) {
      $(hash)
        .attr('tabindex', 0)
        .focus()
        .on('blur', function(){
        this.removeAttribute('tabindex');
      });
    }
  });
}

$(document).on('ready', bindActions);
