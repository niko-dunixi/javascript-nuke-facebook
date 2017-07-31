// Include custom styles into the script to be injected into web pages.
// Remove this line to reduce script output size if you do not need styles.
import './index.css';

// const who = 'world';
// console.log(`Hello ${who}!`);

import * as $ from 'jquery';
$(document).ready(function() {
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
  // This is the only way I can get this to work for ::before content
  // https://stackoverflow.com/a/21709814/1478636
  //document.styleSheets[0].addRule('.shut-it-down::before', 'content: "ASDF"; position: "relative";');
  shutItDown.css('padding', '2em');
  shutItDown.css('border-color', '#3b5998'); // Facebook Blue
  shutItDown.css('border-width', '2px');
  shutItDown.css('border-top-width', '45px');
  shutItDown.css('border-style', 'solid');
  shutItDown.css('border-radius', '10px');
  shutItDown.css('background-color', '#FFF');
  shutItDown.css('position', 'relative');
  shutItDown.css('top', '50%');
  shutItDown.css('float', 'left');
  shutItDown.css('top', '50%');
  shutItDown.css('transform', 'translate(50%, 50%)');
  shutItDown.css('text-align', 'center');
  shutItDown.css('width', '50%');
  shutItDown.css('height', '100%');
  // The below image text
  shutItDown.append('<span class="sid-text"></span>');
  let shutItText = $('.sid-text');
  shutItText.css('font-family', 'Oxygen Mono');
  shutItText.css('font-size', '2em');
  shutItText.append('<div class="setup" />');
  $('.setup').text('Not worth it. Facebook\'s just a sinkhole for human potential.');
  shutItText.append('<div class="punchline" />');
  let punchline = $('.punchline');
  punchline.css('font-size', '2.3em').html('<a href="https://reddit.com/r/programming">TO REDDIT!</a>');
  punchline.css('text-decoration', 'underline');

  function loop(): void {
    let speed = 200;
    $('.punchline a').animate({
      color: '#C88'
    }, speed);
    $('.punchline a').animate({
      color: '#8C8'
    }, speed);
    $('.punchline a').animate({
      color: '#88C'
    }, speed, loop);
  }
  // Reddit link loop
  loop();
});
