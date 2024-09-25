/** */
function resizeIframe() {
  var iframe = document.getElementById('contentIframe');
  
  function adjustIframeHeight() {
      var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

      // Reset iframe height to prevent stacking heights
      iframe.style.height = '0px'; 

      // Calculate height based on the content's scrollHeight plus the desired padding
      var newHeight = iframeDocument.documentElement.scrollHeight + 20; // Add 20px padding at the bottom

      // Set the new height
      iframe.style.height = newHeight + 'px';
  }

  // Adjust height when iframe content loads
  iframe.onload = function() {
      adjustIframeHeight();
  };

  // Adjust height when the window is resized (for zoom in/out)
  window.addEventListener('resize', function() {
      adjustIframeHeight();
  });
}

// Resize iframe whenever the iframe content loads or window is resized
window.onload = resizeIframe;

/* Latest - SAMALAT GPT */

// Nung inimplement ko Iframe, hindi nag aadjust yung iframe sa tables kapag nag dadagdag aq.
// May scroll bar na lumalabas pero parang 0.5 cm lang ang galaw up and down tapos parang naka overflow: hidden;
// yung dating niya.
// bale purpose neto is para mag adjust yung iframe sa content ng html na inopen and gumana yung scroll bar