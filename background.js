// W/H - Width and Height Chrome Extension
// Shows the browsers width and height in both 'em' and 'px' units

var on = false;

function controlAction() {
  on = !on;

  if (on){
    chrome.browserAction.setIcon({path: "icons/icon16.png"});
    chrome.tabs.executeScript(null, { file: 'src/js/script-off.js' });

  }
  else{
    chrome.browserAction.setIcon({path: "icons/icon16-active.png"});
    chrome.tabs.executeScript(null, { file: 'src/js/script-on.js' });

  }
}

chrome.browserAction.onClicked.addListener(controlAction);


