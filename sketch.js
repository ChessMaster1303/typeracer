//IMPORTANT: there are currently some bugs, of which some are mentioned below:
// - From the second line onwards, characters typed will appear after a one-character-delay, so one has to type two characters ahead of the green word from the second line onwards.
// - The fifth line words don't show.
//These bugs shall (hopefully) be patched in a later V1.20 update. But as for now the game works ok-ish; I myself never really got past the 4th line without failing.


//A lot of initial variables that will eventually help the game run. It should be noted that some of these variables are quite useless, especially since other variables can be used in place of it. Perhaps it will be patched in a future update.

function preload() {
  wordChoice = loadStrings('wordlist.txt')
  
  userText = ""
  userTextDisplay = ""
  userTextArray = []
  
  chosenWords = ""
  chosenWordsArray = []
  
  lineHeight = 1/4 * height
  lineCharCount = []
  lineNum = 0
  
  timeToType = false
  gameOver = false
  time = 0
}



function setup() {
  if (windowWidth < windowHeight * 16/9) {
    createCanvas(windowWidth, windowWidth * 9/16)
  }
  
  else if (windowWidth > windowHeight * 16/9) {
    createCanvas(windowHeight * 16/9, windowHeight)
  }
  
  console.log("Canvas Width is " + round(width) + "px.")
  console.log("Canvas Height is " + round(height) + "px.")
  
  //Frame Rate is constant so time passed can be measured, relative to frames passed
  frameRate(60)
  
  //Calls for the aesthetic (not really) GrifflesTypes header
  menuBar()
  
  //Picks and chooses the words to be played later on
  pickString(wordChoice)
}



function draw() {
  
  //As long as the game has not started, always check for the event when the player starts.
  if(timeToType == false) {
    checkStart()
  }
  
  //When the game does start, carry out the procedures necessary to ensure that all relevant data (text inputs, time running etc.) is collected to ensure game can run.
  else {
    progress()
  }
}



//This was supposed to preserve the words chosen and enable the game to continue being played even after a window resize; however it has not been patched yet. Maybe in V1.20?
function windowResized() {
  if (windowWidth < windowHeight * 16/9) {
    createCanvas(windowWidth, windowWidth * 9/16)
  }
  
  else if (windowWidth > windowHeight * 16/9) {
    createCanvas(windowHeight * 16/9, windowHeight)
  }
  
  console.log("Canvas Width resized to " + round(width) + "px.")
  console.log("Canvas Height resized to " + round(height) + "px.")
  
  menuBar()
  pickString(chosenWords)
}