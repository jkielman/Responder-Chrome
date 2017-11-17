// Responder - Outlines the web pages grid, displays the width/height in both 'em' and 'px' units when the browser is resized.

if (document.getElementById('resizeW')) {} else {

    const windowDetectorContainerResizeWindow = document.createElement('div');
          windowDetectorContainerResizeWindow.className = 'windowDetectorContainerResizeWindow';

    const windowDetectorContainerResizeWindowFunc = document.querySelector('.windowDetectorContainerResizeWindow');

    windowDetectorContainerResizeWindow.id = 'resizeW';

    document.body.appendChild(windowDetectorContainerResizeWindow);

    const resizeWMain = document.getElementById('resizeW');

    resizeWMain.innerHTML = '<div id="windowDetector2"><div class="userWidthEm2">W</div><div class="x2">x</div><div class="userHeightEm2">H</div><div class="divider">/</div><div class="userWidth2">w</div><div class="x2">x</div><div class="userHeight2">h</div></div>';

}

function showSizeResizeW() {

    const w = window.innerWidth,
          h = window.innerHeight;

    document.querySelector('.userWidth2').innerHTML = w;
    document.querySelector('.userHeight2').innerHTML = h;

    const wEM = w / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']),
          hEM = h / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);

    const wEmRound = Math.round(wEM),
          hEmRound = Math.round(hEM);

    document.querySelector('.userWidthEm2').innerHTML = wEmRound;
    document.querySelector('.userHeightEm2').innerHTML = hEmRound;

}

showSizeResizeW();

responderTimeOut = 0;

function addResponder() {
    document.querySelector('body').classList.add('responder-sz');
}

function removeResponder() {
    document.querySelector('body').classList.remove('responder-sz');
}
window.addEventListener('resize', function() {

    showSizeResizeW();

    if (responderTimeOut) {
        clearTimeout(responderTimeOut);
    }

    responderTimeOut = setTimeout(removeResponder, 1000);

    addResponder();

});
