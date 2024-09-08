function resizeIframe() {
    var iframe = document.getElementById('contentIframe');
    iframe.onload = function() {
      var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      iframe.style.height = iframeDocument.documentElement.scrollHeight + 'px';
    };
  }

  window.onload = resizeIframe;

  // Nung inimplement ko Iframe, hindi nag aadjust yung iframe sa tables kapag nag dadagdag aq.
  // May scroll bar na lumalabas pero parang 0.5 cm lang ang galaw up and down tapos parang naka overflow: hidden;
  // yung dating niya.
  // bale purpose neto is para mag adjust yung iframe sa content ng html na inopen and gumana yung scroll bar