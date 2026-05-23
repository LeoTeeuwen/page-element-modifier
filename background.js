
const keysObject = {}

// To prevent tabs opening if something incompatible is clicked i.e. iframe element
chrome.tabs.onCreated.addListener((tab) => {
    console.log("New tab opened! Tab ID:", tab.id);
    console.log("URL:", tab.pendingUrl || tab.url);
    console.log("Object: ", keysObject);

    if (keysObject['Control'] && keysObject['y']) {
        chrome.tabs.remove(tab.id);
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'KEY_PRESSED') {
    console.log(`Key pressed: ${message.key} in tab ${sender.tab.id}`);
    keysObject[message.key] = true
  }
  if (message.type === 'KEY_RELEASED') {
    console.log(`Key released: ${message.key} in tab ${sender.tab.id}`);
    keysObject[message.key] = false
  }
});