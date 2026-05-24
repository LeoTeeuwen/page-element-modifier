
const keysObject = {};

// To prevent tabs opening if something incompatible is clicked i.e. iframe element
chrome.tabs.onCreated.addListener((tab) => {
    console.log("Tab URL:", tab.pendingUrl || tab.url);
    console.log("Object: ", keysObject);

    if (keysObject['Control'] && keysObject['y']) {
      try{
        chrome.tabs.remove(tab.id);
      }
      catch {
        console.log(tab.id, " does not exist!");
      }
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'KEY_PRESSED') {
    console.log(`Key pressed: ${message.key} in tab ${sender.tab.id}`);
    keysObject[message.key] = true;
  }

  if (message.type === 'KEY_RELEASED') {
    console.log(`Key released: ${message.key} in tab ${sender.tab.id}`);
    keysObject[message.key] = false;
  }
});