function addElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function removeElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function getTextElementById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementById(element, value) {
    const element1 = document.getElementById(element);
    element1.innerText = value;
}

// function randomNumber() {
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//     const alphabet = alphabetString.split("");
//     // console.log(alphabet);

//     const randomNum = Math.random() * 25;
//     const idx = Math.round(randomNum);
//     alphabet[idx]
// }