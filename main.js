// Array Of Words
const words = [
  "Hello",
  "Programming",
  "code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradign",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

// Setting Levels
const lvls = {
  Easy: 6,
  Normal: 3,
  Hard: 2,
};

// Default Level
let defaultLevelName = "Normal";
let defaultLevelSeconds = lvls[defaultLevelName];

// Catch Selectors
let StartButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector("input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
// Catch Selectors

// Setting Level Name + Seconds + Span
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable Paste Event
input.onpaste = function () {
  return false;
};

// Start Game
StartButton.onclick = function () {
  this.remove();
  input.focus();

  // Generate Word Function
  genWords();
};

function genWords() {
  // Get Random Word From Array
  let randomWord = words[Math.floor(Math.random() * words.length)];

  // Get word Index
  let wordIndex = words.indexOf(randomWord);

  // Remove Word From Array
  words.splice(wordIndex, 1);

  // Show The Random Word
  theWord.innerHTML = randomWord;

  // Empty Upcoming Words
  upcomingWords.innerHTML = "";

  // Generate words
  for (let i = 0; i < wordIndex.length; i++) {
    // Create Div element
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }
  // Call Start Play Function
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      // Stop the timer
      clearInterval(start);

      // compare Words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty Input Field
        input.value = "";

        //Increase Score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          // Call Generate Words
          genWords();
        } else {
          let span = document.createElement("span");
          span.className = "good";
          let spanText = document.createTextNode("Congratulation");
          span.appendChild(spanText);
          finishMessage.appendChild(span);

          // Remove upcoming Words Box
          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let SpanText = document.createTextNode("Game Over");
        span.appendChild(SpanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}
