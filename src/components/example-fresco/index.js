import $ from 'jquery';
import breakpoints from '../../js/breakpoints';
import './_example-fresco.scss';


$('a.js-fresco').on('click', bindFrescoLink);

function bindFrescoLink(event) {
  const linkURL = $(this).attr('href');
  if (verifyVideoLink(linkURL)){
    event.preventDefault(); // only prevents it if is a link.  doesn't require the window.location else
    Fresco.show(linkURL);
  }
}

function verifyVideoLink(url) {
  return isYoutube(url) || isVimeo(url);
}

function isYoutube(url) {
  const youtube = /(youtube\.com|youtu\.be)\/(vi?\/|u\/|embed\/)?([a-zA-Z0-9-_]+)(?:\S+)?$/i.test(url);
  return youtube;
}

function isVimeo(url) {
  const vimeo = /(vimeo\.com)\/([a-zA-Z0-9-_]+)(?:\S+)?$/i.test(url);
  return vimeo;
}
