type Data = { [key: string]: any };

export async function update(tabID: number, currentUrl: string, setting: Data) {
	// remove(tabID, currentUrl, setting);
	const test = await replace(tabID, currentUrl, setting);
}

function remove(tabID: number, currentUrl: string, setting: Data): void {
	const { betweenStart, betweenEnd } = setting.data;
}

function replace(tabID: number, currentUrl: string, setting: Data) {
	const { replaceOriginal, replaceNew } = setting.data;
	return currentUrl.replace(replaceOriginal, replaceNew);
	// if (tabID) chrome.tabs.update(tabID, { url: newUrl });
}
