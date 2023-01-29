function menuBar() {
  background(100)
  textSize(5/100 * width)
  
  fill(0)
  textAlign(LEFT)
  text("GrifflesTypes", 2/100 * width, 13/100 * height)
  
  fill(255);
  strokeWeight(0.2/100 * width)
  line(0, (22 / 100) * height, width, (22 / 100) * height - (0.8 / 100) * width);
  
  console.log("GUI Initiated")
}



//Due to performance impacts, this fullscreen function will not be called anywhere throughout this program until the performance is reasonably good.
function FS(scale) {
  if (
    mouseX > width - (14 / 100) * width &&
    mouseY < (22 / 100) * height - (0.8 / 100) * width
  ) {
    fill(40);
    rect(
      width + (0.8 / 100) * width,
      -((0.8 / 100) * width),
      -((14 / 100) * width),
      (22 / 100) * height,
      (0.8 / 100) * width
    );

    if (mouseIsPressed) {
      fullscreen(true);
    }
  } else {
    fill(0);
    rect(
      width + (0.8 / 100) * width,
      -((0.8 / 100) * width),
      -((14 / 100) * width),
      (22 / 100) * height,
      (0.8 / 100) * width
    );
  }
  stroke(255);
  strokeWeight(2);

  translate((90 / 100) * width, (3.5 / 100) * height);

  line(0, 0, ((3 * scale) / 100) * width, 0);
  line(
    0,
    (12 / 100) * height,
    ((3 * scale) / 100) * width,
    (12 / 100) * height
  );

  line((5 / 100) * width, 0, ((4 + 4 * scale) / 100) * width, 0);
  line(
    (5 / 100) * width,
    (12 / 100) * height,
    ((4 + 4 * scale) / 100) * width,
    (12 / 100) * height
  );

  line(0, 0, 0, ((3 * scale) / 100) * height);
  line(
    ((4 + 4 * scale) / 100) * width,
    0,
    ((4 + 4 * scale) / 100) * width,
    ((3 * scale) / 100) * height
  );

  translate(0, (12 / 100) * height);

  line(0, 0, 0, (-(3 * scale) / 100) * height);
  line(
    ((4 + 4 * scale) / 100) * width,
    0,
    ((4 + 4 * scale) / 100) * width,
    (-(3 * scale) / 100) * height
  );
}