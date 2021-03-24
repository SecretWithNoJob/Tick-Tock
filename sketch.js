var hr,hrAngle;
var mn,mnAngle;
var sc,scAngle; 


function setup() 
{
 createCanvas(450,450);
 angleMode(DEGREES);
}

function draw() 
{
 background(0); 

 fill("black");
 translate(200,200);
 rotate(-90);

 hr = hour();
 mn = minute();
 sc = second();

 scAngle = map(sc, 0, 60, 0, 360);
 mnAngle = map(mn,0,60,0,360)
 hrAngle = map(hr % 12,0,12,0,360)
 
 push();
 rotate(scAngle);
 stroke("blue");
 strokeWeight(4);
 line(0,0,100,0);
 pop();

 push();
 rotate(mnAngle);
 stroke("pink");
 strokeWeight(5.5);
 line(0,0,75,0);
 pop();

 push();
 rotate(hrAngle);
 stroke("red");
 strokeWeight(7);
 line(0,0,40,0);
 pop();
 
 strokeWeight(10);
 noFill();
 
 stroke("blue");
 strokeWeight(4);
 arc(0,0,300,300,0,scAngle);

 stroke("pink");
 strokeWeight(5.5);
 arc(0,0,280,280,0,mnAngle);

 stroke("red");
 strokeWeight(7);
 arc(0,0,260,260,0,hrAngle);

 drawSprites();
}