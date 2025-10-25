/* THIS FILE IS FOR THE STANDARD TEMPLATE, NOT WRITTEN TO PREVENT CONFLICTS WITH THE OTHER FILES! */

// For Change BG/FG Button
// Initalize variables for Change BG/FG Button
const getCSSVariables = document.querySelector(":root"); // Accesses the root property
const changeBG_FG = document.getElementById("changeStyles"); // Gets the Button ID
let CSSVariableArray = {
    bgColor: "",
    fgColor: ""
}

// Change BG/FG Button Function
changeBG_FG.onclick = () => {
    // Asks input on your preferred color.
    CSSVariableArray.bgColor = prompt("Enter your Background Color (BG) \n It can be a color or a hex value(e.g: #000000 for Black)", "Black");
    CSSVariableArray.fgColor = prompt("Enter your Foreground Color (FG) \n It can be a color or a hex value (e.g: #FFFFFF for White)", "White");

    // Prints the debugging information on Console (WILL BE REMOVED)
    getCSSVariables.style.setProperty("--bgColor", CSSVariableArray.bgColor);
    CSSVariableChanger("--bgColor");
    getCSSVariables.style.setProperty("--fgColor", CSSVariableArray.fgColor);
    CSSVariableChanger("--fgColor");

    // For the first update, the configuration will be stored on your browsing cookies.
}


function CSSVariableChanger(CSSType) {
    const obtainStyles = getComputedStyle(getCSSVariables);
    console.log(CSSType + " is " + obtainStyles.getPropertyValue(CSSType));
}

window.onload = () => {
    document.getElementById("versionNumber").innerHTML = "Version 0.80 (ALPHA)"; // Version Number
}