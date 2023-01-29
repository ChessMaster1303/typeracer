function preload() {
  wordChoice = loadStrings('wordlist.txt')
  chosenWords = ""
  previousText = ""
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
  
  timeToType = false
  keyDown = false
  userText = ""
  
  
  menuBar()
  pickString(wordChoice)
}

function draw() {
  checkStart()
  if (timeToType == true) {
    textType()
  }
  
  if (chosenWords == userText) {
    fill(255)
    noStroke()
    rect(0, 20/100 * height, width, height)
    fill(0)
    text("GGs, a better version should come soon!", width/2, height * 4/6)
  }
}



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
  userText = ""
}