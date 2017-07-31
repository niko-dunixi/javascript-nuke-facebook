// Include custom styles into the script to be injected into web pages.
// Remove this line to reduce script output size if you do not need styles.
import * as $ from 'jquery';
import './index.css';

$(document).ready(function() {
  // Nuke the document. This is apparently the slowest way, but it's the only way I've seen work.
  //   https://stackoverflow.com/a/22966637/1478636
  let body = $('body');
  body.empty();
  let font = '<link href="https://fonts.googleapis.com/css?family=Oxygen+Mono" rel="stylesheet">';
  body.append(font);
  body.append('<div class=\'shut-it-down\'></div>');
  // Embed the gif
  // https://giphy.com/gifs/yyp58Yx3Qk0TK
  let embeddedGif = '<iframe src="https://giphy.com/embed/yyp58Yx3Qk0TK" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/yyp58Yx3Qk0TK"></a></p>';
  let shutItDown = $('.shut-it-down');
  shutItDown.append(embeddedGif);
  // https://stackoverflow.com/a/21709814/1478636
  shutItDown.append('<span class="sid-text"></span>');
  let shutItText = $('.sid-text');
  shutItText.append('<div class="setup" />');
  $('.setup').text('Not worth it. Facebook\'s just a sinkhole for human potential.');
  shutItText.append('<div class="punchline" />');
  let punchline = $('.punchline');
  punchline.html('<a href="https://reddit.com/r/programming">TO REDDIT!</a>');
});
