function play() {
    // home section
    console.log("play game");

    addElementById("home_screen");
    addElementById("final_score");

    // playground section
    removeElementById("play_ground");
    setTextElementById("current_life", 5);
    setTextElementById("current_score", 0);

    document.getElementById

    // creata a alphabet string
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabetString.split("");
    console.log(alphabet);

    // get a random number
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    console.log("idx: ", index);

    const randomIndex = alphabet[index];
    console.log("random idx: ", randomIndex);



    const currentAlphabet = document.getElementById("current_alphabet");
    var lowerAlphabet = currentAlphabet.innerText = randomIndex.toUpperCase();
    console.log("lower Alphabet: ", lowerAlphabet);



    const keyboardColor = document.getElementById(randomIndex);
    keyboardColor.classList.add("bg-red-400");

    function handleKeyBrdBtn(event) {
        const playerGame = event.key
        console.log("Player prassed: ", playerGame);

        const currentAlphaElem = document.querySelector("#current_alphabet");
        const current_alphabetNew = currentAlphaElem.innerText

        const expectedAlplhabet = current_alphabetNew.toLowerCase()

        console.log("expecterd alphabet: ", expectedAlplhabet)


        if (playerGame === expectedAlplhabet) {
            console.log("You won the game");

            const alphabetString = "abcdefghijklmnopqrstuvwxyz";
            const alphabet = alphabetString.split("");

            const randomNumber = Math.random() * 25;
            const index = Math.round(randomNumber);

            const randomIndex = alphabet[index];


            const currentAlphabet = document.getElementById("current_alphabet");
            const lowerAlphabet = currentAlphabet.innerText = randomIndex.toUpperCase();

            const keyboardColor = document.getElementById(randomIndex);
            keyboardColor.classList.add("bg-red-400");
        

            const removekeyboardColor = document.getElementById(expectedAlplhabet);
            removekeyboardColor.classList.remove("bg-red-400");

            // Update Score
            //get the current score

            const currentLife = getTextElementById("current_score");
            const updatedLife = currentLife + 1;
            setTextElementById("current_score", updatedLife);

            setTextElementById("finalScore", updatedLife);


        }

        else {
            console.log("press again");

            const alphabetString = "abcdefghijklmnopqrstuvwxyz";
            const alphabet = alphabetString.split("");

            const randomNumber = Math.random() * 25;
            const index = Math.round(randomNumber);

            const randomIndex = alphabet[index];

            const currentAlphabet = document.getElementById("current_alphabet");
            const lowerAlphabet = currentAlphabet.innerText = randomIndex.toUpperCase();

            const keyboardColor = document.getElementById(randomIndex);
            // console.log("not removing: ", keyboardColor)
            keyboardColor.classList.add("bg-red-400");


            const removekeyboardColor = document.getElementById(expectedAlplhabet);
            removekeyboardColor.classList.remove("bg-red-400");


            const currentLife = getTextElementById("current_life");
            const updatedLife = currentLife - 1;
            setTextElementById("current_life", updatedLife);

            if (updatedLife === 0) {
                console.log("Game Over");

                // document.getElementById(keyboardColor).classList.remove("bg-red-400");

                // document.getElementById()

                // addElementById("play_ground");
                addElementById("play_ground");

                // removeElementById("final_score");
                removeElementById("final_score");

                const lastScore = getTextElementById("current_score");
                console.log("last_score: ", lastScore);




            }           
        }
    }
    document.addEventListener("keyup", handleKeyBrdBtn)
}