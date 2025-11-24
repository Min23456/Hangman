const words = ["waterbottle","mouse","paper","wecdsb","coconut","water"];

let selectedWord = "";
let guessedLetters = [];
let remainingGuesses = 6;


const wordDisplay = document.getElementById("word");
const lettersDiv = document.getElementById("letters");


const messageDiv = document.getElementById("message");
const resetBtn = document.getElementById("reset");

function startGame() {
    selectedWord = words[Math.floor(Math.random()* words.length)]
    guessedLetters = [];
    remainingGuesses = 6;
    messageDiv.textContent = "";
    resetBtn.style.display = "none";
    updateWord();
    createLetterButtons();
}




function createLetterButtons() {
    lettersDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i).toLowerCase();
        const btn = document.createElement("button");
        btn.textContent = letter;
        btn.classList.add("letter");
        btn.addEventListener("click", () => handleGuess(letter, btn));
        lettersDiv.appendChild(btn);

    }                
}



























function updateWord() {
    const display = selectedWord
        .split("")
        .map((letter)=> (guessedLetters.includes(letter)? letter : "_"))
        .join(" ");
    wordDisplay.textContent = display;
    if (!display.includes("_")){
        messageDiv.textContent = "🎉You Win!";
        endGame();
    }
}






















function handleGuess(letter,btn){
    btn.disabled = true;
    if (selectedWord.includes(letter)) {
        guessedLetters.push(letter);
        updateWord();
    }else{
        remainingGuesses--;
        messageDiv.textContent = `Wrong guess! Remaining: ${remainingGuesses}`;
        if (remainingGuesses === 0) {
            messageDiv.textContent = `💀 Game OVer! The word was "${selectedWord}"`;
            endGame();
        }
    }
}





















































function endGame() {
    const buttons = document.querySelectorAll(".letter");
    buttons.forEach((btn) =>(btn.disabled = true));
    resetBtn.style.display = "inline-block";
}












































































































resetBtn.addEventListener("click", startGame);

startGame();