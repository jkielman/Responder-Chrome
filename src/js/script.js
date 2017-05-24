// W/H - Width and Height Chrome Extension
// Shows the browsers width and height in both 'em' and 'px' units


const windowDetector = '<div id="windowDetector"><div class="userWidthEm">W</div><div class="x">x</div><div class="userHeightEm">H</div><div class="divider">/</div><div class="userWidth">w</div><div class="x">x</div><div class="userHeight">h</div></div>';

const windowDetectorContainer =  document.createElement("windowDetectorContainer");

document.body.appendChild(windowDetectorContainer);

windowDetectorContainer.innerHTML = windowDetector;

function showSize() {

    const w = window.innerWidth,
              h = window.innerHeight;

    document.querySelector(".userWidth").innerHTML = w;
    document.querySelector(".userHeight").innerHTML = h;

    const wEM = w / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']),
              hEM = h / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);

    const wEmRound = Math.round(wEM),
              hEmRound = Math.round(hEM);

    document.querySelector(".userWidthEm").innerHTML = wEmRound;
    document.querySelector(".userHeightEm").innerHTML = hEmRound;

}

    showSize();

window.addEventListener("resize", function() {

    showSize();

});

document.getElementById("windowDetector").style.visibility = 'hidden';
