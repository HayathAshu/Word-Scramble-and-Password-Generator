// Array of words with their corresponding hints

let words = [
    // Each object represent a word and its hint
    
    {
        word: "Nandan",
        hint: "Principle of SRS First Grade College"
    },

    {
        word: "talk",
        hint: "To say words aloud; to speck to someone"
    },

    {
        word: "Charles Babbage",
        hint: "Father of a Computer"
    },

    {
        word: "Algorithm",
        hint: "A set of instructions used to solve a particular problem"
    },

    {
        word: "Computer",
        hint: "An electronic device that can store, process, and communicate information"
    },

    {
        word: "RCB",
        hint: "Ee Sala Cup Namde"
    },

    {
        word: "LinkedIN",
        hint: "A social networking site for professionals"
    },

    {
        word: "Google",
        hint: "A popular search engine"
    },

    {
        word: "Linux",
        hint: "An open-source operating system"
    },

    {
        word: "Python",
        hint: "A high-level programming language"
    },

    {
        word: ""
    },

    {
        word: "Instagram",
        hint: "A social media platform for sharing photos and videos"
    },

    {
        word: "Facebook",
        hint: "A social media platform for connecting with friends and family"
    },

    {
        word: "Grammar",
        hint: "The rules and conventions that govern the use of language"
    },

    {
        word: "Kite",
        hint: "A bird of prey with a forked tail"
    }
];

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

// Function to initialize the timer
const initTimer = (maxTime) => {
clearInterval(timer);
timer = setInterval(() => {
    if (maxTime > 0) {
    maxTime--;
    return (timeText.innerText = maxTime);
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
}, 1000);
};

// Function to initialize the game
const initGame = () => {
initTimer(10);
let randomObj = words[Math.floor(Math.random() * words.length)];
let wordArray = randomObj.word.split("");
for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
}
wordText.innerText = wordArray.join("");
hintText.innerText = randomObj.hint;
correctWord = randomObj.word.toLowerCase();
inputField.value = "";
inputField.setAttribute("maxlength", correctWord.length);
};
initGame();

// Function to check the user's input word
const checkWord = () => {
let userWord = inputField.value.toLowerCase();
if (!userWord) return alert("Please enter the word to check!");
if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
};

// Event listeners for the refresh and check buttons
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);