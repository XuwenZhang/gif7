let angle = 0;
let speed = 0.005;


let boxDim = 40;
let growth = .5;





//Lamp head rectangle
let box01 = { // this is a "map" of all components that define location of box01
  color: 0,
  boxX: 220,
  boxY: 152,
  boxWidth:160,
  boxHeight:120,
  speedX: 5,
  speedY: 7,
}

//Lamp cap circle
let circle01 = {
  color: 0,
  boxX: 302,
  boxY: 145,
  boxWidth: 12,
  boxHeight: 12,
  speedX: 7,
  speedY: 5
}

//Lamp neck rectangle
let box02 = {
  color: 0,
  boxX: 294,
  boxY: 230,
  boxWidth: 16,
  boxHeight: 60,
  speedX: 4,
  speedY: 6,
}

//Lamp shoulder rectangle
let box03 = {
  color: 0,
  boxX: 275,
  boxY: 290,
  boxWidth: 54,
  boxHeight: 22,
  speedX: 8,
  speedY: 3
}

//Lamp chest rectangle
let box04 = {
  color: 0,
  boxX: 290,
  boxY: 312,
  boxWidth: 24,
  boxHeight: 52,
  speedX: 7,
  speedY: 10
}

//Lamp belly upward triangle
let triangle01 = {
 color: 0,
 triangleX1: 276,
 triangleY1: 392,
 triangleX2: 302,
 triangleY2: 327,
 triangleX3: 328,
 triangleY3: 392,
 speedX: 5,
 speedY: 5
}

//Lamp belly rectangle
let box05 = {
 color: 0,
 boxX: 276,
 boxY: 392,
 boxWidth: 52,
 boxHeight: 26,
 speedX: 6,
 speedY: 5
}

//Lamp belly downward triangle
let triangle02 = {
 color: 0,
 triangleX1: 276,
 triangleY1: 418,
 triangleX2: 302,
 triangleY2: 453,
 triangleX3: 328,
 triangleY3: 418,
 speedX: 3,
 speedY: 3,
}

//Lamp foot triangle
let triangle03 = {
 color: 0,
 triangleX1: 267,
 triangleY1: 478,
 triangleX2: 302,
 triangleY2: 428,
 triangleX3: 337,
 triangleY3: 478,
 speedX: 1,
 speedY: 1
}

//Lamp foot rectangle
let box06 = {
 color: 0,
 boxX: 264,
 boxY: 478,
 boxWidth: 76,
 boxHeight: 13,
 speedX: 3,
 speedY: 2
}

//Lamp head left minus triangle
let triangle04 = {
 color: [200,200,240],
 triangleX1: 220,
 triangleY1: 150,
 triangleX2: 220,
 triangleY2: 270,
 triangleX3: 230,
 triangleY3: 150,
 speedX: 1,
 speedY: 8
}

//Lamp head right minus triangle
let triangle05 = {
 color: [200,200,240],
 triangleX1: 380,
 triangleY1: 150,
 triangleX2: 380,
 triangleY2: 270,
 triangleX3: 370,
 triangleY3: 150,
 speedX: 5,
 speedY: 3
}

//Lamp cap minus rectangle
let box07 = {
 color: [200,200,240],
 boxX: 286,
 boxY: 149,
 boxWidth: 20,
 boxHeight: 2,
 speedX: 8,
 speedY: 2
}

//Lamp shoulder left minus circle
let circle02 = {
 color: [200,200,240],
 boxX: 275,
 boxY: 312,
 boxWidth: 30,
 boxHeight: 30,
 speedX: 5,
 speedY: 2
}

//Lamp shoulder right minus circle
let circle03 = {
 color: [200,200,240],
 boxX: 329,
 boxY: 312,
 boxWidth: 30,
 boxHeight: 30,
 speedX: 14,
 speedY: 7
}

let boxes = [box01,box02,box03,box04,box05,box06,box07];
let boxArray = [];

let circles = [circle01,circle02,circle03]
let circleArray = [];

let triangles = [triangle01,triangle02,triangle03,triangle04,triangle05]
let triangleArray = [];



class BoxMoved {
  constructor(incomingBox){
    this.incomingBox = incomingBox;
    }

    drawBox() {
      push();
      if (this.incomingBox.boxX > width || this.incomingBox.boxX < 0) {
        this.incomingBox.speedX = this.incomingBox.speedX*-1;
      }
      this.incomingBox.boxX = this.incomingBox.boxX + this.incomingBox.speedX;
      if (this.incomingBox.boxY > height || this.incomingBox.boxY < 0) {
        this.incomingBox.speedY = this.incomingBox.speedY*-1;
      }
      this.incomingBox.boxY = this.incomingBox.boxY + this.incomingBox.speedY;
      noStroke();
      fill(this.incomingBox.color);
      rect(this.incomingBox.boxX,this.incomingBox.boxY, this.incomingBox.boxWidth, this.incomingBox.boxHeight);
      pop();
    }
    tracingObject(incomingGeometry) {

      stroke(0)
      rectMode(CENTER)
      line(this.incomingBox.boxX, 0, this.incomingBox.boxX, height)
      line(0, this.incomingBox.boxY, width, this.incomingBox.boxY)
    }

}


class CircleMoved {
  constructor(incomingCircle){
    this.incomingCircle = incomingCircle;
  }

 drawCircle() {
  fill(this.incomingCircle.color);//Black
  noStroke()
  push()
  if (this.incomingCircle.boxX > width || this.incomingCircle.boxX < 0) {
    this.incomingCircle.speedX = this.incomingCircle.speedX*-1;
  }

  this.incomingCircle.boxX = this.incomingCircle.boxX + this.incomingCircle.speedX;

  if (this.incomingCircle.boxY > height || this.incomingCircle.boxY < 0) {
    this.incomingCircle.speedY = this.incomingCircle.speedY*-1;
  }

  this.incomingCircle.boxY = this.incomingCircle.boxY + this.incomingCircle.speedY;
  circle(this.incomingCircle.boxX, this.incomingCircle.boxY, this.incomingCircle.boxWidth, this.incomingCircle.boxHeight);
  pop();

}
tracingObject() {

  stroke(0)
  rectMode(CENTER)
  line(this.incomingCircle.boxX, 0, this.incomingCircle.boxX, height)
  line(0, this.incomingCircle.boxY, width, this.incomingCircle.boxY)
}
}


class TriangleMoved {
  constructor(incomingTriangle){
    this.incomingTriangle = incomingTriangle;
  }
 drawTriangle() {
  //Lamp belly downward triangle
  fill(this.incomingTriangle.color);//Black
  noStroke()
  push()
  if (this.incomingTriangle.triangleX1 > width || this.incomingTriangle.triangleX1 < 0 || this.incomingTriangle.triangleX2 > width || this.incomingTriangle.triangleX2 < 0 || this.incomingTriangle.triangleX3 > width || this.incomingTriangle.triangleX3 < 0 ) {
    this.incomingTriangle.speedX = this.incomingTriangle.speedX*-1;
  }
  this.incomingTriangle.triangleX1 = this.incomingTriangle.triangleX1 + this.incomingTriangle.speedX;
  this.incomingTriangle.triangleX2 = this.incomingTriangle.triangleX2 + this.incomingTriangle.speedX;
  this.incomingTriangle.triangleX3 = this.incomingTriangle.triangleX3 + this.incomingTriangle.speedX;

  if (this.incomingTriangle.triangleY1 > width || this.incomingTriangle.triangleY1 < 0 || this.incomingTriangle.triangleY2 > width || this.incomingTriangle.triangleY2 < 0 || this.incomingTriangle.triangleY3 > width || this.incomingTriangle.triangleY3 < 0) {
    this.incomingTriangle.speedY = this.incomingTriangle.speedY*-1;
  }
    this.incomingTriangle.triangleY1 = this.incomingTriangle.triangleY1 + this.incomingTriangle.speedY;
    this.incomingTriangle.triangleY2 = this.incomingTriangle.triangleY2 + this.incomingTriangle.speedY;
    this.incomingTriangle.triangleY3 = this.incomingTriangle.triangleY3 + this.incomingTriangle.speedY;
      triangle(this.incomingTriangle.triangleX1, this.incomingTriangle.triangleY1, this.incomingTriangle.triangleX2, this.incomingTriangle.triangleY2, this.incomingTriangle.triangleX3, this.incomingTriangle.triangleY3);

  pop();

  stroke(0)
  line(this.incomingTriangle.triangleX2, 0, this.incomingTriangle.triangleX2, height)
  line(0, (this.incomingTriangle.triangleY2+this.incomingTriangle.triangleY1)/2, width, (this.incomingTriangle.triangleY1+this.incomingTriangle.triangleY2)/2)
}
}
