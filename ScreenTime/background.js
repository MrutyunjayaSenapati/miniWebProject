let activeTabId = null;
let siteTimes = {};
let blockedSites = {};

chrome.storage.local.get(["siteTimes", "blockedSites"], (data) => {
    siteTimes = data.siteTimes || {};
    blockedSites = data.blockedSites || {};
});

chrome.tabs.onActivated.addListener(activeInfo => {
    updateTimeSpent();
    activeTabId = activeInfo.tabId;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.active && changeInfo.status === "complete") {
        updateTimeSpent();
        activeTabId = tabId;
    }
});

function updateTimeSpent() {
    if (activeTabId) {
        chrome.tabs.get(activeTabId, (tab) => {
            if (tab && tab.url) {
                let hostname = new URL(tab.url).hostname;
                siteTimes[hostname] = (siteTimes[hostname] || 0) + 1;
                chrome.storage.local.set({ siteTimes });
            }
        });
    }
}

chrome.alarms.create("updateTime", { periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === "updateTime") {
        updateTimeSpent();
    }
});