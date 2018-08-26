"use strict";
console.log('background running');
chrome.browserAction.onClicked.addListener(function () {
    console.log('Clicked');
});
