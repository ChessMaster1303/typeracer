//Very simple function that draws the top GrifflesTypes "menu"; it originally was supposed to have more functions but sadly, it never materialised due to the complexity of the game mechanics (which took most of the time).

function menuBar() {
  background(100)
  textSize(5/100 * width)
  
  fill(0)
  textAlign(LEFT)
  text("GrifflesTypes", 2/100 * width, 13/100 * height)
  
  fill(255);
  strokeWeight(0.2/100 * width)
  line(0, (22 / 100) * height, width, (22 / 100) * height - (0.8 / 100) * width);
}