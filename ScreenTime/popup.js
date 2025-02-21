chrome.storage.local.get("siteTimes", (data) => {
    let siteList = document.getElementById("siteList");
    let siteTimes = data.siteTimes || {};
    for (let site in siteTimes) {
        let li = document.createElement("li");
        li.textContent = `${site}: ${siteTimes[site]} mins`;
        siteList.appendChild(li);
    }
});

document.getElementById("clearData").addEventListener("click", () => {
    chrome.storage.local.clear();
    location.reload();
});