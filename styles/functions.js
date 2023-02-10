var iframes = document.querySelectorAll('iframe[id="rsFrame"]');

iframes.forEach(function(iframe) {
  iframe.addEventListener('load', function() {

    var height = iframe.contentWindow.document.body.scrollHeight;
    var width = iframe.contentWindow.document.body.scrollWidth;

    iframe.style.height = height + 'px';
    iframe.style.width = width + 'px';
  });
});
