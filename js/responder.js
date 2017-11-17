// Responder - Outlines the web pages grid, displays the width/height in both 'em' and 'px' units when the browser is resized.

if (document.getElementById('toggleR')) {} else {

    const windowDetectorContainerToggle = document.createElement('div');
    	  windowDetectorContainerToggle.className = 'windowDetectorContainerToggle';

    const windowDetectorContainerToggleFunc = document.querySelector('.windowDetectorContainerToggle');

    document.body.appendChild(windowDetectorContainerToggle);

    windowDetectorContainerToggle.id = 'toggleR';

    const toggleRMain = document.getElementById('toggleR');

    toggleRMain.innerHTML = '<div id="windowDetector1"><div class="userWidthEm1">W</div><div class="x1">x</div><div class="userHeightEm1">H</div><div class="divider">/</div><div class="userWidth1">w</div><div class="x1">x</div><div class="userHeight1">h</div></div>';


}

function showSizeResizeToggle() {

    const w = window.innerWidth,
          h = window.innerHeight;

    document.querySelector('.userWidth1').innerHTML = w;
    document.querySelector('.userHeight1').innerHTML = h;

    const wEM = w / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']),
          hEM = h / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);

    const wEmRound = Math.round(wEM),
          hEmRound = Math.round(hEM);

    document.querySelector('.userWidthEm1').innerHTML = wEmRound;
    document.querySelector('.userHeightEm1').innerHTML = hEmRound;

}

	showSizeResizeToggle();

window.addEventListener('resize', function() {

    showSizeResizeToggle();

});

	showSizeResizeToggle();
