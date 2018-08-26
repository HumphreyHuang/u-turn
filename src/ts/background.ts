console.log('background running');

chrome.browserAction.onClicked.addListener(() => {
	console.log('Clicked');
});
