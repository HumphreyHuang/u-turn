import { update } from './update';

chrome.browserAction.onClicked.addListener(() => {
	init();
});

function init(): void {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
		const tabID = tabs[0].id!;
		const currentUrl = tabs[0].url;

		chrome.storage.sync.get('data', setting => {
			type SettingData = {
				betweenStart: string;
				betweenEnd: string;
				replaceOriginal: string;
				replaceNew: string;
			};

			const {
				betweenStart,
				betweenEnd,
				replaceOriginal,
				replaceNew
			} = setting.data;

			const settings = {
				betweenStart,
				betweenEnd,
				replaceOriginal,
				replaceNew
			} as SettingData;

			const hasSettings =
				betweenStart || betweenEnd || replaceOriginal || replaceNew;

			if (currentUrl && hasSettings) {
				update(tabID, currentUrl, settings);
			} else {
				alert('Test');
			}
		});
	});
}
