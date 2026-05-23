// Holds what keys we are going to be working with
// An Object as this side steps needing several booleans when a single Object suffices
const keysObject = {}

// document.addEventListener('click', (event) => {
//     // Access the clicked element:
//     const clickedElement = event.target;
//     console.log("Clicked Element: ", clickedElement);

//     // Manual recreation of JQuery hotkeys
//     if(keysObject[89] && keysObject[17]) {
//         clickedElement.style.display = 'none';
//     }

// });
// Attempt with most up to date raw JQuery!
document.addEventListener("click", (event) => {
    console.log("Clicked in the second!");
    if (keysObject[89] && keysObject[17]) {
        console.log("Remove Element");
        // event.target.style.display = 'none';
        event.target.style.display = 'none';
        event.target.remove();
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault(); // Stop link from navigating!
    }
}, true);


// $(css_selector)[0].click();


$(document).on("keydown", (event) => {
    // console.log(event.which);
    keysObject[`${event.which}`] = true;
});

$(document).on("keyup", (event) => {
    // console.log(event.which);
    keysObject[`${event.which}`] = false;
});