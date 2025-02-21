let blockedSites = {};
chrome.storage.local.get("blockedSites", (data) => {
    blockedSites = data.blockedSites || {};
    updateBlockedList();
});

document.getElementById("blockSite").addEventListener("click", () => {
    let site = document.getElementById("siteInput").value;
    if (site) {
        blockedSites[site] = true;
        chrome.storage.local.set({ blockedSites });
        updateBlockedList();
    }
});

function updateBlockedList() {
    let blockedList = document.getElementById("blockedList");
    blockedList.innerHTML = "";
    for (let site in blockedSites) {
        let li = document.createElement("li");
        li.textContent = site;
        blockedList.appendChild(li);
    }
}
