chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {
            redirectUrl: "https://web.archive.org/web/" + details.url
        };
    },
    {
        urls: [
            "*://www.geocities.jp/*",
            "*://www.geocities.co.jp/*"
        ]
    },
    ["blocking"]
);