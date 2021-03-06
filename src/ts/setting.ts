window.onload = () => {
    chrome.storage.sync.get("data", field => {
        if (field.data) {
            const {
                betweenStart,
                betweenEnd,
                replaceOriginal,
                replaceNew
            } = field.data;

            getElementsById("betweenStart").value = betweenStart;
            getElementsById("betweenEnd").value = betweenEnd;
            getElementsById("replaceOriginal").value = replaceOriginal;
            getElementsById("replaceNew").value = replaceNew;
        }
    });
};

const btn = document.getElementById("saveBtn");

btn!.addEventListener(
    "click",
    (): void => {
        const betweenStart = getElementsById("betweenStart").value;

        const betweenEnd = getElementsById("betweenEnd").value;

        const replaceOriginal = getElementsById("replaceOriginal").value;

        const replaceNew = getElementsById("replaceNew").value;

        const data = {
            betweenStart,
            betweenEnd,
            replaceOriginal,
            replaceNew
        };

        chrome.storage.sync.set({ data }, () => {
            window.close();
        });
    }
);

function getElementsById(id: string) {
    return document.getElementById(id) as HTMLInputElement;
}
