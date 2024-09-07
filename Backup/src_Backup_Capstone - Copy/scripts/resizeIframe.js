function resizeIframe() {
    var iframe = document.getElementById('contentIframe');
    iframe.onload = function() {
      var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      iframe.style.height = iframeDocument.documentElement.scrollHeight + 'px';
    };
  }

  window.onload = resizeIframe;