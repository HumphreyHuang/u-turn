"use strict";
window.onload = function () {
    chrome.storage.sync.get('data', function (field) {
        var _a = field.data, betweenStart = _a.betweenStart, betweenEnd = _a.betweenEnd, replaceOriginal = _a.replaceOriginal, replaceNew = _a.replaceNew;
        getElementsById('betweenStart').value = betweenStart;
        getElementsById('betweenEnd').value = betweenEnd;
        getElementsById('replaceOriginal').value = replaceOriginal;
        getElementsById('replaceNew').value = replaceNew;
    });
};
var btn = document.getElementById('saveBtn');
btn.addEventListener('click', function () {
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
        //window.close();
    });
});
function getElementsById(id) {
    return document.getElementById(id);
}
