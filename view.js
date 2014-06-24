document.addEventListener('DOMContentLoaded', function () {
  var webv = document.getElementById('app');
  document.onkeyup = function(e) {
    if (e.keyCode == 116) // F5
      webv.reload();
  };

  webv.addEventListener('newwindow', function(e) {
    webv.contentWindow.postMessage({action: 'newwindow', data: e.targetUrl}, webv.src);
  });
});

var closeWindow = function() {
  chrome.app.window.current().close();
};