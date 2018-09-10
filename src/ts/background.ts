import { update } from './update';

chrome.browserAction.onClicked.addListener(() => {
	init();
});

function init(): void {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
		const tabID = tabs[0].id!;
		const currentUrl = tabs[0].url;

		chrome.storage.sync.get('data', setting => {
			// TODO Check if there is a setting has been sanved
			// TODO make sure other tabs won't affect the tab you are currently on

			if (currentUrl) {
				update(tabID, currentUrl, setting);
			}
		});
	});
}
