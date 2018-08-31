// import { remove } from './remove';

chrome.browserAction.onClicked.addListener(() => {
	init();
});

function init() {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
		const tabID = tabs[0].id;
		chrome.storage.sync.get('data', field => {
			const {
				betweenStart,
				betweenEnd,
				replaceOriginal,
				replaceNew
			} = field.data;
		});
		// if (tabID) chrome.tabs.update(tabID, { url: 'https://www.google.ca' });
	});
}
