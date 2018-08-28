"use strict";
chrome.browserAction.onClicked.addListener(function () {
    init();
});
function init() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        var tabID = tabs[0].id;
        chrome.storage.sync.get('data', function (data) {
            console.log(data);
        });
        // if (tabID) chrome.tabs.update(tabID, { url: 'https://www.google.ca' });
    });
}
