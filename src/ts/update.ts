type Data = { [key: string]: any };

export async function update(tabID: number, currentUrl: string, setting: Data) {
	const url_replaced = await replace(currentUrl, setting);
	const url_final = await remove(url_replaced, setting);

	if (tabID) chrome.tabs.update(tabID, { url: url_final });
}

function replace(currentUrl: string, setting: Data) {
	const { replaceOriginal, replaceNew } = setting;
	return currentUrl.replace(replaceOriginal, replaceNew);
}

function remove(currentUrl: string, setting: Data) {
	const { betweenStart, betweenEnd } = setting;
	const regex = betweenStart + '.*.' + betweenEnd;
	const rx = new RegExp(regex);

	return currentUrl.replace(rx, betweenStart + betweenEnd);
}
