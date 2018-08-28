chrome.browserAction.onClicked.addListener(() => {
	init();
});

function init() {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
		const tabID = tabs[0].id;
		chrome.storage.sync.get('data', data => {
			console.log(data);
		});
		// if (tabID) chrome.tabs.update(tabID, { url: 'https://www.google.ca' });
	});
}
