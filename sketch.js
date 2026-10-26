let num = 5;
let gap = 50;
let circleNumSlider;
let circleGapSlider;
let colorPicker;
let len = 100;

let lines1NumSlider;
let lines1LenSlider;
let lines1DistSlider;
let lines1SpinSlider;
let lines1ColorPicker;
let showLines1Checkbox;
let aniLines1Checkbox;

let lines2NumSlider;
let lines2LenSlider;
let lines2DistSlider;
let lines2SpinSlider;
let lines2ColorPicker;
let aniLines2Checkbox;



function setup() {
  createCanvas(windowWidth, windowHeight * 0.5);
  noFill();
  strokeWeight(10);
  createP("circles");
  circleNumSlider = createSlider(1,15, 3); // create a slider for the number of circles (min,max,default,step)
  circleGapSlider = createSlider(20,100, 50); // create a slider for the gap between circles (min, max, default,step)
  colorPicker = createColorPicker('#000000'); // create a color picker (default color)

  createP("lines 1");
  lines1NumSlider = createSlider(1, 12, 5);
  lines1LenSlider = createSlider(50, 200, 150);
  lines1SpinSlider = createSlider(0, 360, 60, 5);
  lines1DistSlider = createSlider(0, 150, 100);
  lines1ColorPicker = createColorPicker("#000000");
  showLines1Checkbox = createCheckbox("show", true);
  aniLines1Checkbox = createCheckbox("animate!", false);

  createP("lines 2");
  lines2NumSlider = createSlider(1, 12, 5);
  lines2LenSlider = createSlider(50, 200, 150);
  lines2SpinSlider = createSlider(0, 360, 60, 5);
  lines2DistSlider = createSlider(0, 150, 100);
  lines2ColorPicker = createColorPicker("#000000");
  aniLines2Checkbox = createCheckbox("animate!", false);

 
}

function draw() {
  background("white");
  translate(width / 2, height / 2); // Move the origin to the center of the canva
  drawCircles();
  if (showLines1Checkbox.checked()){
    drawLines1();
  }
  drawLines2();
}

function drawCircles(){
     num = circleNumSlider.value(); // get the value from the slider for the number of circles
     gap = circleGapSlider.value(); // get the value from the slider for the gap between circles
     stroke(colorPicker.color()); // set the stroke color to the value from the color picker

     for (let i = 0; i < num; i++) { // loop to create multiple circles
        push();
        circle(0,0,(i+1)*gap); // x,y,diameter; it is generating circles with increasing diameters
        pop();
    }

} // drawing circles and allowing you to change the color and how many of them

function drawLines1(){
    let num = lines1NumSlider.value();
    let len = lines1LenSlider.value();
    for (let i = 0; i < num; i++){
        push();
        stroke(lines1ColorPicker.value());
        rotate(i/num * TWO_PI);
        translate(lines1DistSlider.value(), 0); //distance from the center
        rotate(radians(lines1SpinSlider.value()));
        if (aniLines1Checkbox.checked()) {
                rotate(frameCount * 0.01)
               }
        line(-len/2,0,len/2,0);
        pop();
    }
} // drawing lines and allowing you to change the rotation, distance, and color

function drawLines2(){
    let num = lines2NumSlider.value();
    let len = lines2LenSlider.value();
    for (let i = 0; i < num; i++){
        push();
            stroke(lines2ColorPicker.value());
            rotate(i/num * TWO_PI);
            translate(lines2DistSlider.value(), 0); //distance from the center
            rotate(-radians(lines2SpinSlider.value())); //making radians negative so they go the opposite direction of the first set of lines
                if (aniLines2Checkbox.checked()) {
                rotate(frameCount * 0.01)
               }
            line(-len/2,0,len/2,0);
            pop();
    }
} // drawing a second set of lines that go the opposite direction
