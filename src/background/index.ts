chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
    switch (msg) {
        case "send-fb":
            chrome.tabs.create({ url: "https://www.facebook.com/marketplace/" });
            break;
        case "send-vt":
            chrome.tabs.create({ url: "https://www.vettx.com/" });
            break;
    }
});