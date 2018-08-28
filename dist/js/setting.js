"use strict";
var btn = document.getElementById('saveBtn');
btn.addEventListener('click', function () {
    save();
});
function save() {
    var betweenStart = getElementsById('betweenStart').value;
    var betweenEnd = getElementsById('betweenEnd').value;
    var replaceOriginal = getElementsById('replaceOriginal').value;
    var replaceNew = getElementsById('replaceNew').value;
    var data = {
        betweenStart: betweenStart,
        betweenEnd: betweenEnd,
        replaceOriginal: replaceOriginal,
        replaceNew: replaceNew
    };
    chrome.storage.sync.set({ data: data }, function () {
        // TODO Error checking
        window.close();
    });
}
function getElementsById(id) {
    return document.getElementById(id);
}
