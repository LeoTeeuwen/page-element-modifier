// Holds what keys we are going to be working with
// An Object as this side steps needing several booleans when a single Object suffices
const keysObject = {}

// Attempt with most up to date raw JQuery!
// TODO Work on it not working with IFrames!
document.addEventListener("click", (event) => {
    console.log("Clicked!");
    console.log("Object: ", keysObject[89], keysObject[17]);
    if (keysObject[89] && keysObject[17]) {
        console.log("Remove Element");
        event.target.style.display = 'none';
        event.target.remove();
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault(); // Stop link from navigating!
    }
}, true);

$(document).on("keydown", (event) => {
    keysObject[`${event.which}`] = true;
    
    if (event.key === 'y' || event.key === 'Control') {
        chrome.runtime.sendMessage({
            type: 'KEY_PRESSED',
            key: event.key,
            code: event.code
        });
    }
});

$(document).on("keyup", (event) => {
    keysObject[`${event.which}`] = false;
    
    if (event.key === 'y' || event.key === 'Control') {
        chrome.runtime.sendMessage({
            type: 'KEY_RELEASED',
            key: event.key,
            code: event.code
        });
    }
});