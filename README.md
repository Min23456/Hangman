# 🌟 Min2345's Hangman Word Game! 🎯

Welcome, code explorer! Dive into a fun, interactive Hangman game built with **TypeScript** and powered by the **`const words` array** containing thousands of everyday words. Perfect for learning, playing, and testing your coding skills!

## 🙋‍♀️ About This Project

This is more than just a game—it’s a playground for **TypeScript enthusiasts** and word lovers alike. The game randomly selects a word from your `const words` array, and your mission is to guess it before your remaining attempts run out!

* **Thousands of words** covering food, clothing, household items, electronics, school supplies, nature, and more.
* Fully typed in **TypeScript** for safety and maintainability.
* Perfect for beginners or advanced learners experimenting with DOM manipulation, arrays, and events.

## 🎮 Gameplay Features

* Click letters to guess them.
* Correct letters appear in the word display.
* Wrong guesses decrease remaining attempts.
* Win 🎉 or game-over 💀 messages appear when the round ends.
* Reset button to start a fresh game anytime.

## 💻 How To Play

1. Click a letter button to guess a letter.
2. Correct letters are revealed in the word.
3. Wrong guesses reduce your remaining attempts.
4. Win if you guess the word before running out of guesses.
5. Hit **Reset** to start a new game.

## 🖼️ Screenshot

Here’s a peek at the game in action:


<img width="930" height="574" alt="Capture" src="https://github.com/user-attachments/assets/8c36c4f5-51df-466b-a126-5068e1fcd845" />



## 🔗 Try It Live!

👉 [**CLICK HERE TO PLAY!**](https://min23456.github.io/Hangman/) 👈

## 📂 How It Works (Technical Overview)

* **Word Source:** `const words` – your master list of everyday words.
* **Variables:** `selectedWord`, `guessedLetters`, `remainingGuesses`
* **DOM Elements:** `wordDisplay`, `lettersDiv`, `messageDiv`, `resetBtn`
* **Core Functions:**

  * `startGame()` – Initializes a new round and picks a random word from `const words`.
  * `createLetterButtons()` – Creates clickable letter buttons.
  * `handleGuess(letter, btn)` – Handles user guesses.
  * `updateWord()` – Updates the displayed word with correct guesses.
  * `endGame()` – Disables buttons and shows the reset button after win or loss.

## 💡 Contribution

Contributions welcome! You can:

* Add more words to the `const words` array.
* Suggest UI improvements or new gameplay features.
* Optimize TypeScript code for performance or readability.






