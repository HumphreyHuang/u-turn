import '../style/main.scss';

window.onload = () => {
	chrome.storage.sync.get('data', field => {
		const {
			betweenStart,
			betweenEnd,
			replaceOriginal,
			replaceNew
		} = field.data;

		getElementsById('betweenStart').value = betweenStart;
		getElementsById('betweenEnd').value = betweenEnd;
		getElementsById('replaceOriginal').value = replaceOriginal;
		getElementsById('replaceNew').value = replaceNew;
	});
};

const btn = document.getElementById('saveBtn');

btn!.addEventListener('click', () => {
	type SettingData = {
		betweenStart: string;
		betweenEnd: string;
		replaceOriginal: string;
		replaceNew: string;
	};

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
		//window.close();
	});
});

function getElementsById(id: string) {
	return document.getElementById(id) as HTMLInputElement;
}
