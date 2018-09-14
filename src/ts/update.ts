type Data = { [key: string]: any };

export async function update(tabID: number, currentUrl: string, setting: Data) {
	const url_replaced = await replace(currentUrl, setting);
	const url_final = await remove(url_replaced, setting);
	console.log(url_final);

	// if (tabID) chrome.tabs.update(tabID, { url: newUrl });
}

function replace(currentUrl: string, setting: Data) {
	const { replaceOriginal, replaceNew } = setting.data;
	return currentUrl.replace(replaceOriginal, replaceNew);
}

function remove(currentUrl: string, setting: Data) {
	const { betweenStart, betweenEnd } = setting.data;
	const regex = `/${betweenStart}.*${betweenEnd}/`;
	const rx = new RegExp(/em.*.sandbox/);
	return rx;
	return currentUrl.replace(rx, 'em.sandbox');
}
