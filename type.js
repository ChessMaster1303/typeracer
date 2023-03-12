//Any non-special key pressed (i.e. typical keys except "BACKSPACE")

function keyTyped() {
  if(timeToType == true) {
    userText = userText + key
    userTextArray.push(key)
  }
}



//This function activates whenever any key is pressed, but its only goal is such that when "BACKSPACE" is pressed, it removes the last character of the string

function keyPressed() {
  if(keyCode == 8) {
    userText = userText.slice(0, userText.length - 1)
    userTextArray.pop()
  }
  
  console.log(userText)
}