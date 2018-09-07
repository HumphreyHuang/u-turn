type Data = { [key: string]: any };

export function replace(currentUrl: string, setting: Data): void {
	const { replaceOriginal, replaceNew } = setting.data;
	const newUrl = currentUrl.replace(replaceOriginal, replaceNew);
	console.log(newUrl);
}
