// ==UserScript==
// @name         Shut it down!
// @namespace    paulbaker.io
// @version      0.1
// @description  Take a leaf out of Liz Lemon's book. Shut it down.
// @author       github.com/paul-nelson-baker
// @match        https://www.facebook.com/**
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @require      https://code.jquery.com/color/jquery.color.plus-names-2.1.2.min.js
// ==/UserScript==

(function() {
  'use strict';
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
    // Make the div vertically and horizontally centered.
    // https://stackoverflow.com/a/5703632/1478636
    //body.css('.shut-it-down::pre', 'Bookface');
    shutItDown.css('padding', '2em');
    shutItDown.css('border-color', '#3b5998'); // Facebook Blue
    shutItDown.css('border-width', '2px');
    shutItDown.css('border-top-width', '45px');
    shutItDown.css('border-style', 'solid');
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

    function loop() {
      let speed = 200;
      $('.punchline a').animate({
        color: '#C88'
      }, speed);
      $('.punchline a').animate({
        color: '#8C8'
      }, speed);
      $('.punchline a').animate({
        color: '#88C'
      }, speed, loop());
    }
    // Reddit link loop
    loop();

  });
})();
