import { update } from './update';

chrome.browserAction.onClicked.addListener(() => {
	init();
});

function init(): void {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
		const tabID = tabs[0].id!;
		const currentUrl = tabs[0].url!;

		chrome.storage.sync.get('data', setting => {
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
			};

			const hasSettings =
				betweenStart || betweenEnd || replaceOriginal || replaceNew;

			// Pre set settings for mb3online.com sites
			if (!hasSettings && currentUrl.includes('sandbox.mb3online.com')) {
				const data = {
					betweenStart: 'em,hm,pa,mc',
					betweenEnd: '.sandbox',
					replaceOriginal: '.com',
					replaceNew: '.local'
				};

				chrome.storage.sync.set({ data }, () => {});
			}

			if (hasSettings) {
				update(tabID, currentUrl, settings);
			} else {
				alert('Well..Please config your options first :)');
			}
		});
	});
}
