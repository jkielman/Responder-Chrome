'use strict';

chrome.storage.local.get(['toggle-display-localstorage'], function(returned) {

    if (returned['toggle-display-localstorage'] === 'true') {

        const headNew = document.getElementsByTagName('head')[0],
            src = document.createElement('script');
        src.src = chrome.extension.getURL('js/responder.js');
        headNew.appendChild(src);

        document.querySelector('body').classList.add('responder');

        const switchOne = document.getElementById('toggle-display');
        if (switchOne) {
            document.getElementById('toggle-display').classList.add('active');
        }

    } else {

        const switchOne = document.getElementById('toggle-display');
        if (switchOne) {
            document.getElementById('toggle-display').classList.remove('active');
        }

    }

});



chrome.storage.local.get(['show-on-resize-localstorage'], function(returned) {

    if (returned['show-on-resize-localstorage'] === 'true') {

        document.querySelector('body').classList.add('responder-resize-on');

        const headNew = document.getElementsByTagName('head')[0],
            src = document.createElement('script');
        src.src = chrome.extension.getURL('js/responder-sz.js');
        headNew.appendChild(src);
    }

});
