export async function update(tabID: number, currentUrl, setting) {
	const url_replaced = await replace(currentUrl, setting);
	const url_final = await remove(url_replaced, setting);

	if ((url_replaced || url_final) && tabID) {
		chrome.tabs.update(tabID, { url: url_final || url_replaced });
	}
}

function replace(currentUrl, setting) {
	const { replaceOriginal, replaceNew } = setting;
	return currentUrl.replace(replaceOriginal, replaceNew);
}

function remove(currentUrl, setting) {
	const { betweenStart, betweenEnd } = setting;
	const betweenStartArray = betweenStart.split(',');
	let url = '';
	betweenStartArray.map(data => {
		let regex = data + '.*.' + betweenEnd;
		let rx = new RegExp(regex);
		if (rx.test(currentUrl)) {
			url = currentUrl.replace(rx, data + betweenEnd);
		}
	});

	return url;
}
