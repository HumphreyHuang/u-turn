import { remove } from './remove';

chrome.browserAction.onClicked.addListener(() => {
	init();
});

function init() {
	remove();
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
		const tabID = tabs[0].id;
		chrome.storage.sync.get('data', field => {
			// TODO Check if there is a setting has been sanved
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
