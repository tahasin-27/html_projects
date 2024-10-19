function play() {
    const homeSection = document.querySelector("#home-screen");
    homeSection.classList.add("hidden");

    const playSection = document.querySelector("#play_ground");
    playSection.classList.remove("hidden");

    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const string = alphabetString.split("");

    const index = Math.round(Math.random() * 25);
    const newIndex = string[index];
    const upper = newIndex.toUpperCase()

    const currentAlphabet = document.querySelector("#current_alphabet");
    currentAlphabet.innerText = upper;

    const keyBoardColor = document.querySelector(`#${newIndex}`);
    keyBoardColor.classList.add("bg-red-300");
    // keyBoardColor.style.backgroundColor = "coral";

    document.addEventListener("keydown", function(event) {
        console.log("Entered key was: ", event.key);
    })

}

