function checkStart() {
  if (mouseY > 22/100 * height - 0.8 * width) {
    textAlign(CENTER)
    fill(0)
    text("CLICK TO GET READY", width/2, height * 95/100)
    
    if (mouseY > 22/100 * height - 0.8 * width && mouseIsPressed) {
      timeToType = true
    }
  }
}



function pickString(wordChoice) {
  if (chosenWords == "") {
    wordArray = split(wordChoice + '', ", ")
    for (let i = 1; i < 31; i += 1) {
      chosenWords = random(wordArray) + " " + chosenWords
    }
  
    textSize(width/30)
    textAlign(CENTER)
    textWrap(WORD)
    text(chosenWords, 2.5/100 * width, 25/100 * height, 95/100 * width)
  }
  
  else {
    textSize(width/30)
    textAlign(CENTER)
    textWrap(WORD)
    text(chosenWords, 2.5/100 * width, 25/100 * height, 95/100 * width)
  }
}



function textType() {
  noStroke()
  fill(100)
  rect(0, height * 4/6, width, height)
  
  while (keyDown == true) {
    if (key == "Backspace") {
      userText = previousText
      keyDown = false
    }
    
    else {
      previousText = userText
      userText = userText + key
      key = ""
      keyDown = false
    }
  }
  
  fill(0)
  textAlign(CENTER)
  text(userText, width/2, height * 4.5/6)
}



function keyPressed() {
  keyDown = true
}