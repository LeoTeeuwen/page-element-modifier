// Holds what keys we are going to be working with
// An Object as this side steps needing several booleans when a single Object suffices
const keysObject = {}

document.addEventListener('click', (event) => {
    // Access the clicked element:
    const clickedElement = event.target;
    console.log("Clicked Element: ", clickedElement);

    // Manual recreation of JQuery hotkeys
    if(keysObject[89] && keysObject[17]) {
        clickedElement.style.display = 'none';
    }

});

// Attempt with most up to date raw JQuery!
$(document).on("click", (event) => {
    if(keysObject[89] && keysObject[17]) {
        console.log("Remove Element");
        event.stopPropagation();
        event.preventDefault(); // Stop link from navigating!
    }
});

$(document).on("keydown", (event) => {
    // console.log(event.which);
    keysObject[`${event.which}`] = true;
});

$(document).on("keyup", (event) => {
    // console.log(event.which);
    keysObject[`${event.which}`] = false;
});