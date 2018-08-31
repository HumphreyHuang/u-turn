"use strict";
// import { remove } from './remove';
chrome.browserAction.onClicked.addListener(function () {
    init();
});
function init() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        var tabID = tabs[0].id;
        chrome.storage.sync.get('data', function (field) {
            var _a = field.data, betweenStart = _a.betweenStart, betweenEnd = _a.betweenEnd, replaceOriginal = _a.replaceOriginal, replaceNew = _a.replaceNew;
        });
        // if (tabID) chrome.tabs.update(tabID, { url: 'https://www.google.ca' });
    });
}
