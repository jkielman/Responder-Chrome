'use strict';

document.addEventListener('DOMContentLoaded', function() {


    //Storage on for 1

    chrome.storage.local.get(['toggle-display-localstorage'], function(returned) {

        const label = 'Toggle display';
        document.getElementById('toggle-display').value =
            returned['toggle-display-localstorage'] === 'true' ?
            label :
            label;

        if (returned['toggle-display-localstorage'] === 'true') {
            document.getElementById('toggle-display').classList.add('active');
        } else {
            document.getElementById('toggle-display').classList.remove('active');
        }

    });

    //Storage on for 2
    chrome.storage.local.get(['show-on-resize-localstorage'], function(returned) {

        const label = 'Show on resize';
        document.getElementById('show-on-resize').value =
            returned['show-on-resize-localstorage'] === 'true' ?
            label :
            label;

        if (returned['show-on-resize-localstorage'] === 'true') {
            document.getElementById('show-on-resize').classList.add('active');
        } else {
            document.getElementById('show-on-resize').classList.remove('active');
        }
    });

    function callback() {
                if (chrome.runtime.lastError) {
                        console.log(chrome.runtime.lastError.message);
                } else {

                }
    }


    const buttonOne = document.getElementById('toggle-display');
    if (buttonOne) {

        //Event for Storage 1
        buttonOne.addEventListener('click', function() {

            if (document.getElementById('show-on-resize').classList.contains("active")) {
                document.getElementById('show-on-resize').dispatchEvent(new Event('click'));
                document.querySelector('body').classList.remove('responder-resize-on');
            }

            buttonOne.classList.toggle('active');

            chrome.tabs.query({}, function(tabs) {

                //.executeScript
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {
                        code: 'document.querySelector("body").classList.toggle("responder");document.querySelector("body").classList.toggle("responder-resize-off");'
                    }, callback);
                }

                //.executeScript
                for (var j = 0; j < tabs.length; j++) {
                    chrome.tabs.executeScript(tabs[j].id, {
                        file: 'js/responder.js'
                    }, callback);
                }

                //.insertCSS
                for (var e = 0; e < tabs.length; e++) {
                    chrome.tabs.insertCSS(tabs[e].id, {
                        file: 'css/rstyles.css'
                    }, callback);
                }

            });


            chrome.storage.local.get(['toggle-display-localstorage'], function(returned) {
                const label = 'Toggle display';
                if (returned['toggle-display-localstorage'] === 'true') {
                    chrome.storage.local.remove(['toggle-display-localstorage']);

                    label;

                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.remove("responder");'
                    });
                } else {
                    chrome.storage.local.set({
                        'toggle-display-localstorage': 'true',
                    });
                    chrome.tabs.executeScript({
                        code: 'document.querySelector("body").classList.add("responder");'
                    });
                    label;
                }
                buttonOne.value = label;
            });
        });

    }


    const buttonTwo = document.getElementById('show-on-resize');
    if (buttonTwo) {
        //Event for Storage 2
        buttonTwo.addEventListener('click', function() {

            chrome.tabs.query({}, function(tabs) {

                //.executeScript
                for (var j = 0; j < tabs.length; j++) {
                    chrome.tabs.executeScript(tabs[j].id, {
                        code: 'document.querySelector("body").classList.toggle("responder-resize-on"); '
                    }, callback);
                }

                //.executeScript
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {
                        file: 'js/responder-sz.js'
                    }, callback);
                }

                //.insertCSS
                for (var e = 0; e < tabs.length; e++) {
                    chrome.tabs.insertCSS(tabs[e].id, {
                        file: 'css/styles.css'
                    }, callback);
                }

            });

            if (document.getElementById('toggle-display').classList.contains('active')) {
                document.getElementById('toggle-display').dispatchEvent(new Event('click'));
            }

            buttonTwo.classList.toggle('active');

            chrome.storage.local.get(['show-on-resize-localstorage'], function(returned) {
                const label = 'Show on resize';
                if (returned['show-on-resize-localstorage'] === 'true') {
                    chrome.storage.local.remove(['show-on-resize-localstorage']);

                    label;


                } else {
                    chrome.storage.local.set({
                        'show-on-resize-localstorage': 'true',
                    });

                    label;
                }

                document.getElementById('show-on-resize').value = label;

            });

        });

    }


});
