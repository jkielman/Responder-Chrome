// Responder - Outlines the web pages grid and displays the width/height in both 'em' and 'px' units when the browser is resized.

const windowDetector = '<div id="windowDetector"><div class="userWidthEm">W</div><div class="x">x</div><div class="userHeightEm">H</div><div class="divider">/</div><div class="userWidth">w</div><div class="x">x</div><div class="userHeight">h</div></div>';

const windowDetectorContainer =  document.createElement('div');

document.body.appendChild(windowDetectorContainer);

windowDetectorContainer.innerHTML = windowDetector;

function showSize() {

const w = window.innerWidth,
      h = window.innerHeight;

    document.querySelector('.userWidth').innerHTML = w;
    document.querySelector('.userHeight').innerHTML = h;

const wEM = w / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']),
        hEM = h / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);

const wEmRound = Math.round(wEM),
      hEmRound = Math.round(hEM);

  document.querySelector('.userWidthEm').innerHTML = wEmRound;
  document.querySelector('.userHeightEm').innerHTML = hEmRound;

  }

showSize();

responderTimeOut = 0;
function addResponder() {
   document.querySelector('body').classList.add('responder');
}
function removeResponder() {
   document.querySelector('body').classList.remove('responder');
}
window.addEventListener('resize', function(){
  showSize();
    if (responderTimeOut) {
        clearTimeout(responderTimeOut);
      }
    responderTimeOut = setTimeout(removeResponder, 1000);
    addResponder();
});













