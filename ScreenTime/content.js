chrome.storage.local.get("blockedSites", (data) => {
    let blockedSites = data.blockedSites || {};
    let hostname = window.location.hostname;
    if (blockedSites[hostname]) {
        document.body.innerHTML = `<h1 style='color: red; text-align: center;'>This site is blocked</h1>`;
    }
});