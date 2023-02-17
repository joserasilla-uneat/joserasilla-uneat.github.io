var iframes = document.querySelectorAll('iframe[id="rsFrame"]');

iframes.forEach(function(iframe) {
  iframe.addEventListener('load', function() {

    var height = iframe.contentWindow.document.body.scrollHeight;
    var width = iframe.contentWindow.document.body.scrollWidth;

    iframe.style.height = height + 'px';
    iframe.style.width = width + 'px';
  });
});

var pfCardsFrames = document.querySelectorAll('iframe[id="pfCards"]');

pfCardsFrames.forEach(function(pfCard) {
  pfCard.addEventListener('load', function() {

    var height = pfCard.contentWindow.document.body.scrollHeight;
    var width = pfCard.contentWindow.document.body.width;

    pfCard.style.height = height + 'px';
    pfCard.style.width = width + 'px';
  });
});