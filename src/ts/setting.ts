const btn = document.getElementById('saveBtn');

btn!.addEventListener('click', () => {
	save();
});

function save() {
	interface SettingData {
		betweenStart: string;
		betweenEnd: string;
		replaceOriginal: string;
		replaceNew: string;
	}

	const betweenStart = getElementsById('betweenStart').value;

	const betweenEnd = getElementsById('betweenEnd').value;

	const replaceOriginal = getElementsById('replaceOriginal').value;

	const replaceNew = getElementsById('replaceNew').value;

	const data = {
		betweenStart,
		betweenEnd,
		replaceOriginal,
		replaceNew
	} as SettingData;

	chrome.storage.sync.set({ data }, () => {
		// TODO Error checking
		window.close();
	});
}

function getElementsById(id: string) {
	return document.getElementById(id) as HTMLInputElement;
}
