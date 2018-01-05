
var drawing = false;

var oscB;
var oscR;
var oscG;
var oscBl;
var oscW;

var playing = false;


var x=50;
var y=80;

var pulse;

var button;

var linecolor;
var brush, lastbrush;

var black;
var pink;
var green;
var blue;
var white;

var slider;


function setup(){


	black = color(0,0,0,255);
	pink = color(255, 100, 100, 255);
	green = color(200,250,50, 255);
	blue= color(100,100,250, 255);
	white= color(255,255,255, 255);



createCanvas(innerWidth-200,innerHeight-200);
fill(200);
rect(50, 50, 500, 500);
strokeWeight(2);
stroke(0);

background(255);
cursor(CROSS);



linecolor= color(black);

slider = createSlider(4,100,0);
slider.position(innerWidth-250,40);
slider.style('-webkit-appearance', 'none');

slider.style( 'outline', 'none');
slider.style('width', '150px');
slider.style('background', 'white');


 button = createButton('Reset');
 button.position(100, 40);
 // button.style('padding', '10px');
 button.style('background-color', 'white');
 button.style('border', '0px');
 button.style( 'outline', 'none');
 button.style('font-family', 'futura');
 button.style('font-size', '15px');
 button.mousePressed(reset);


 oscB  = new p5.Oscillator();
 oscB.setType('sine');
 oscB.freq(240);
 oscB.amp(0.2);



 oscR  = new p5.TriOsc();
 oscR.freq(240);
 oscR.amp(0.2);


 oscG  = new p5.SawOsc();
 oscG.freq(50);
 oscG.amp(0.05);

 oscBl  = new p5.SqrOsc();
 oscBl.freq(100);
 oscBl.amp(0.05);


 oscW  = new p5.Noise('pink');

 oscW.amp(0.2);
}

function reset(){

background(255);
}


function draw(){

var brushSize = slider.value();

noStroke();

//black
fill(0);
rect(x,y, 80,80);

//red
fill(255,100,100);
rect(x,y+130, 80,80);

//green
fill(200,250,50);
rect(x,y+260, 80,80);

//blue
fill(100,100,250);
rect(x,y+390,  80,80);

strokeWeight(2);
stroke(200);

//white
fill(255);
rect(x,y+520, 80,80);


    // fill(255);
    // noStroke();
    // rect(innerWidth-150,00,140,100);




	if(drawing){


		strokeWeight(brushSize-2);

		stroke(linecolor);

		line(pmouseX,pmouseY,mouseX,mouseY)



		//color
		if(mouseX>50&&mouseX<130&&mouseY>80&&mouseY<160){

		linecolor =color(black);
		console.log("black is chosen");


		 }

		if(mouseX>50&&mouseX<130&&mouseY>210&&mouseY<290){

		linecolor =color(pink);

		}

		 }

		if(mouseX>50&&mouseX<130&&mouseY>340&&mouseY<420){

		linecolor =color(green);

		 }

		if(mouseX>50&&mouseX<130&&mouseY>470&&mouseY<560){

		linecolor =color(blue);


		 }


		if(mouseX>50&&mouseX<130&&mouseY>610&&mouseY<690){



		linecolor =color(white);




		}







//sound




 var w = map(mouseX, 0, width, 120, 500);
 // w = constrain(w, 0, 1);
 oscB.freq(w)





 var h = map(mouseY, 0, height, 0.2, 1);
 // w = constrain(w, 0, 1);
 oscB.amp(h)



 var w1 = map(mouseX, 0, width, 300, 700);
 // w = constrain(w, 0, 1);
 oscR.freq(w1)


 var h1 = map(mouseY, 0, height, 0.2, 1);
 // w = constrain(w, 0, 1);
 oscR.amp(h1)




 var w2 = map(mouseX, 0, width, 200, 700);
 // w = constrain(w, 0, 1);
 oscG.freq(w2)


 var h2 = map(mouseY, 0, height, 0.05, 0.3);
 // w = constrain(w, 0, 1);
 oscG.amp(h2)




 var w3 = map(mouseX, 0, width, 50, 200);
 // w = constrain(w, 0, 1);
 oscBl.freq(w3)


 var h3 = map(mouseY, 0, height, 0.05, 0.3);
 // w = constrain(w, 0, 1);
 oscBl.amp(h3)


}


function mousePressed(){

// oscB.start();
//  oscR.start();
// if(linecolor =color(255,100,100)){
// 		oscR.start();
// 		oscB.stop();
// 	}
console.log("mousePressed()");
drawing = true;
console.log(linecolor);
if(linecolor === color(black)) {
	oscB.start();
} else if (linecolor === color(pink)) {
	console.log("drawingredinmousePressed()")
	oscR.start();
} else if (linecolor === color(green)) {
	console.log("drawingredinmousePressed()")
	oscG.start();
} else if (linecolor === color(blue)) {
	console.log("drawingredinmousePressed()")
	oscBl.start();
}else if (linecolor === color(white)) {
	console.log("drawingredinmousePressed()")
	oscW.start();
}

}


function mouseReleased(){
	drawing=false;

	oscB.stop();
	oscR.stop();
	oscG.stop();
	oscBl.stop();
	oscW.stop();






}
