//This function chooses 30 random words from wordlist.txt. It will string them together to form 6 different strings --> one string for each line, each string contains 5 words. The length of each string is calculated and stored in an array so that the program knows when the user's input should carry to the next line.

function pickString(wordChoice) {
  if (chosenWords == "") {
    wordArray = split(wordChoice + '', ", ")
    for (let i = 0; i < 6; i += 1) {
      for(let f = 0; f < 5; f += 1) {
        chosenWords = random(wordArray) + " " + chosenWords
      }
      textSize(width/30)
      textAlign(LEFT)
      textWrap(WORD)
      text(chosenWords, 2.5/100 * width, (25 + 10*i)/100 * height, 95/100 * width)
      
      
      for(let i = 0; i < chosenWords.length; i += 1) {
        chosenWordsArray.push(chosenWords.slice(i, i + 1))
      }
      
      lineCharCount.push(chosenWords.length)
      chosenWords = ""
    }
  }
}



//This keeps the "CLICK TO START" text in the middle, and ensures that the typing or timer does not start until the mouse is clicked, which is the event that starts the game.

function checkStart() {
  if (mouseY > 22/100 * height - 0.8 * width) {
    textAlign(CENTER)
    fill(0)
    text("CLICK TO START", width/2, height * 95/100)
    
    if (mouseY > 22/100 * height - 0.8 * width && mouseIsPressed) {
      timeToType = true
      startFrame = frameCount
      
      fill(100)
      noStroke()
      rect(0, height * 85/100, width, height)
    }
  }
}



//This function runs continuously for as long as the game has started.

function progress() {
  
  //This keeps the timer running as long as the game has started and the user has not ended the game by making a mistake or by finishing.
  if(gameOver == false) {
    time = (frameCount - startFrame) / 60
    
    fill(100)
    rect(0, height * 85/100, width, height)
  
    fill(0)
    textSize(15/600 * width)
    textAlign(RIGHT)
    text("Time elapsed: " + time.toFixed(2) + "s", 95/100 * width, 95/100 * height)
  }
  
  //This whole chunk is complicated, but the overarching "if" will enable the typing of characters (correc characters; wrong ones will redirect to fail the "test").
  if(userTextArray[userTextArray.length - 1] == chosenWordsArray[userTextArray.length - 1] && gameOver == false) {
    userTextDisplay = userText
    
    fill(0, 255, 0)
    textSize(width/30)
    textAlign(LEFT)
    textWrap(WORD)
    
    
    //Very special chunk that works such that when your user text input number of characters exceeds the number of characters for the pre-specified words character counts, it should move the user to input text in the next line.
    if(userText.length < lineCharCount[0]) {
      lineHeight = 0
      text(userText, 2.5/100 * width, (25 + lineHeight * 10)/100 * height, 95/100 * width)
    }
    
    
    else if(userText.length <= lineCharCount[0] + lineCharCount[1]) {
      lineHeight = 1
      text(userText.slice(lineCharCount[0], -1), 2.5/100 * width, (25 + lineHeight * 10)/100 * height, 95/100 * width)
      
      console.log("Line 2")
      console.log(userText.slice(lineCharCount[0], -1))
    }
    
    
    else if(userText.length <= lineCharCount[0] + lineCharCount[1] + lineCharCount[2]) {
      lineHeight = 2
      text(userText.slice(lineCharCount[0] + lineCharCount[1], -1), 2.5/100 * width, (25 + lineHeight * 10)/100 * height, 95/100 * width)
      console.log("Line 3")
    }
    
    
    else if(userText.length <= lineCharCount[0] + lineCharCount[1] + lineCharCount[2] + lineCharCount[3]) {
      lineHeight = 3
      text(userText.slice(lineCharCount[0] + lineCharCount[1] + lineCharCount[2], -1), 2.5/100 * width, (25 + lineHeight * 10)/100 * height, 95/100 * width)
      console.log("Line 4")
    }
    
    
    else if(userText.length <= lineCharCount[0] + lineCharCount[1] + lineCharCount[2] + lineCharCount[3] + lineCharCount[4]) {
      lineHeight = 4
      text(userText.slice(lineCharCount[0] + lineCharCount[1] + lineCharCount[2] + lineCharCount[3], -1), 2.5/100 * width, (25 + lineHeight * 10)/100 * height, 95/100 * width)
      console.log("Line 5")
    }
    
    
    //This is the winning condition; where the player's text length equals the given text length (in which case no wrong characters were typed). Characters-per-second is calculated, then entire function stopped. Unfortunately it is unlikely people get to this stage - because of the sheer difficulty and also because of the hinderences of the current bugs.
    else if(userText.length == chosenWords.length) {
      stroke(255, 0, 0)
      textAlign(CENTER)
      text("CONGRATS", width * 8.5/10, height * 1.8/4)
      text("Char. per sec:", width * 8.5/10, height * 2/4)
      text(round(userTextDisplay.length / time), width * 8.5/10, height * 2.2/4)
      gameOver = true
      
      noStroke()
    }
  }
  
  //When the player loses (by inputting just one wrong key - just one because we aim for precision and accuracy in Philosophy haha), we give out the characters-per-minute results, then stop this entire function.
  else {
    stroke(255, 0, 0)
    line(width * 8/10, height * 1/4, width * 9/10, height * 1.5/4)
    line(width * 9/10, height * 1/4, width * 8/10, height * 1.5/4)
    textAlign(CENTER)
    text("GAME OVER", width * 8.5/10, height * 1.8/4)
    text("Char. per sec:", width * 8.5/10, height * 2/4)
    text(round(userTextDisplay.length / time), width * 8.5/10, height * 2.2/4)
    gameOver = true
    
    noStroke()
  }
}