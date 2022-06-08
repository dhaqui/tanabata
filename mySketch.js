let palette = ["#CABAC8", "#FF101F", "#B2DDF7", "#81D6E3", "#4CB5AE", "#bf98b2", "#cca1b6", "#e2b2b6", "#ebc5bc" ];

function setup() {
//	createCanvas(1080, 1920);
	createCanvas(800, 800);
	angleMode(DEGREES);
	background("#fff")
	rectMode(CENTER);
	noStroke();
	noLoop();
	
	let percent = 50 / 100;
	
	graphics = createGraphics(width, height);
	graphics.stroke(255, 10 / 100 * 255);

	for (i = 0; i < graphics.width * graphics.height * percent; i++) {
		graphics.point(
			random(graphics.width),
			random(graphics.height)
		);
	}
}
function draw() {
//	drawB();
	drawA();
	drawv_rain();
//	drawB();
	//drawbe10();
}

function drawA() {
//	let couleurs = random(palette);
//	background(couleurs);
//	background()
	
	let gradientStroke = drawingContext.createLinearGradient(
    width * 0.1,
    height * 0.1,
    width * 1.2,
    height * 1.2
  );
  temperature =25;
  gradientStroke.addColorStop(0, color(0, 200,250));
  gradientStroke.addColorStop(0.5, color(255, 200, 0));
  gradientStroke.addColorStop(1, color(255, 200, 255));

  drawingContext.strokeStyle = gradientStroke;
	
	
	let gradientFill = drawingContext.createRadialGradient(
    width / 3,
    height / 3,
    width * 0.5,
    width / 2,
    height / 2,
    width * 1.5
  );

  gradientFill.addColorStop(0, color(150, 150, 220,250));
  gradientFill.addColorStop(0.5, color(random(255), 210,250,250));
  gradientFill.addColorStop(1, color(random(255), random(255), random(255),250));

  drawingContext.fillStyle = gradientFill;
	
  
	for (let i = 100; i < 800; i += 200) {
		for (let j = 100; j < 800; j += 200) {
			for (let k = 100; k > 0; k -= random(10, 40)) {
			//	let couleurs = random(palette);
				
			//	fill(couleurs);
			//	stroke(0,0,0,0);
			//	fill(0,0,0,0);
				if (k == 100) {
				//	rect(i, j, k, k);
					
					
				} else if (k < 100) {
					let rotation = random(-5, 10);
					
					
					
					push();
					translate(i+random(-300,300), j+random(-300,300));
					rotate(rotation);
					rand =random(100);
					if(rand>97){
				//	  drawv_b();
					}
					//rect(0, 0, tailleCarre -400, tailleCarre-40);
				//	stroke(couleurs);
			    strokeWeight(random(2));
			    //line(tailleCarre-random(150), tailleCarre-random(50), tailleCarre +random(50), tailleCarre+random(50));
				//	circle(k-random(50), k-random(50), random(20));
					//mousePressed_2();
					//mousePressed_3();
					//drawv_b();
					drawv();
					
					pop();
					
				}
				
				
			}
		//	drawv_rain();
		}
		
		
	}

	image(graphics, 0, 0);
	
}

function drawB() {
	let couleurs = random(palette);
	background(couleurs);
//	background()
	
	let gradientStroke = drawingContext.createLinearGradient(
    width * 0.1,
    height * 0.1,
    width * 1.2,
    height * 1.2
  );
  temperature =25;
  gradientStroke.addColorStop(0, color(0, 200,250));
  gradientStroke.addColorStop(0.5, color(255, 200, 0));
  gradientStroke.addColorStop(1, color(255, 200, 255));

  drawingContext.strokeStyle = gradientStroke;
	
	
	let gradientFill = drawingContext.createRadialGradient(
    width / 3,
    height / 3,
    width * 0.5,
    width / 2,
    height / 2,
    width * 1.5
  );

  gradientFill.addColorStop(0, color(150, 150, 220,250));
  gradientFill.addColorStop(0.5, color(random(255), 210,250,250));
  gradientFill.addColorStop(1, color(random(255), random(255), random(255),250));

  drawingContext.fillStyle = gradientFill;
	
  
	for (let i = 100; i < 800; i += 100) {
		for (let j = 100; j < 800; j += 100) {
			for (let k = 100; k > 0; k -= random(10, 40)) {
				if (k == 100) {
				//	rect(i, j, k, k);
					
					
				} else if (k < 100) {
					let rotation = random(-5, 10);
					
					
					
					push();
					translate(i+random(-300,300), j+random(-300,300));
					rotate(rotation);
			    strokeWeight(random(2));
          drawv_b();
					pop();
					
				}
				
				
			}
		}
	}
	image(graphics, 0, 0);
	
}

function drawv() {

  let gap = -2; 
  let cellsize = ( width - (5 + 1) * gap ) / 80; 
  let rndCount = 0; 
    for (i=0; i<12; i++) { // col
      for (j=0; j<8; j++) { // row
        let rnd = random(0, 5);
        if(rnd == 0 && rndCount < 5){
           fill(couleurs); 
           rndCount++; 
        } else { 
					 if(rnd>3){
          // fill(random(180), 0, 157, 200); 
					//	fill(random(200,220), random(130,150), random(130,150), 200);
						 fill(random(120,250), random(120,250), random(0,250), 200);
					 }else{
					//	fill(50,50, random(157,200), 230); 
					 }
        }       
        rect( gap * (i+1) + cellsize * i + random(-12, 1200), gap * (j+100) + cellsize * j + random(-12, 120), cellsize,random(cellsize*5));
			/**	for (let i = 0; i < 30; i ++) {
					bezier(
						random(random(11) - i / 1.0),
						random(1) + i,
						random(random(-3),random(1)),
						random(-1,random(1)),
						random(-3,random(1)),
						random(-5,random(1)),
						random(-1,random(1)),
						random(random(1) + i / 20)
					);
				}*/
		
      }
    }
} 

function drawbe10(){
		let gradientStroke = drawingContext.createLinearGradient(
			width * 0.1,
			height * 0.1,
			width * 1.2,
			height * 1.2
		);
		temperature =25;
		gradientStroke.addColorStop(0, color(random(250), random(250),random(250),110));
		gradientStroke.addColorStop(0.5, color(0, 200,250,110));
		gradientStroke.addColorStop(1, color(0, 200,250,110));

		drawingContext.strokeStyle = gradientStroke;


		let gradientFill = drawingContext.createRadialGradient(
			width / 3,
			height / 3,
			width * 0.5,
			width / 2,
			height / 2,
			width * 1.5
		);

		gradientFill.addColorStop(0, color(210, 210, 210,100));
		gradientFill.addColorStop(0.2, color(random(255), random(255), random(255),100));
		gradientFill.addColorStop(0.5, color(random(255), random(255), random(255),100));

		drawingContext.fillStyle = gradientFill;
	 actRandomSeed = random(100000);
	 randomSeed(actRandomSeed);

  // ------ colors ------
  // create palette
	/**
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(130, 220);
      saturationValues[i] = 100;
      brightnessValues[i] = random(15, 100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(20, 100);
      brightnessValues[i] = 100;
    }
  }
	*/
  var rand = random(100);
	if(rand>98){
		strokeWeight(500);
	}else if(rand>80){
		strokeWeight(100);
	}else{
		strokeWeight(1);
	}
  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;

  // seperate each line in parts
  for (var i = rowCount; i >= 0; i--) {
    // how many fragments
    var partCount = i + 1;
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      // sub fragments or not?
      if (random() < 0.075) {
        // take care of big values
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw rects
    var sumPartsNow = 0;
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];

      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var y = rowHeight * i;
      var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
      var h = rowHeight;

     // var index = counter % colorCount;
     // var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
     // fill(col);
			fill(0,0,0,0);
      rect(x, y+random(-3000,3000), w/100, h*10);

      counter++;
    }
  }

}


function drawv_b() {

  let gap = -2; 
  let cellsize = ( width - (5 + 1) * gap ) / 80; 
  let rndCount = 0; 
    for (i=0; i<5; i++) { // col
      for (j=0; j<5; j++) { // row
        let rnd = random(0, 5);
        if(rnd == 0 && rndCount < 5){
           fill(couleurs); 
           rndCount++; 
        } else {        
           fill(0, random(100,180), 157, 200); 
        }  
				rotate(random(80,140));
				
				let randx= random(800);
				let randy= random(800);
				let randw = random(140,180)
				ellipse(randx, randy, randw, random(80,120));

			//	ellipse(random(800), random(800), random(140,180)+i, random(80,120));
				//stroke(0,200,250);
			//	line(randx, randy,randx, randy+randw)
       // rect( gap * (i+1) + cellsize * i + random(-12, 12), gap * (j+1) + cellsize * j + random(-12, 12), cellsize,cellsize);
      }
    }
}
function drawv_rain() {
		let gradientStroke = drawingContext.createLinearGradient(
			width * 0.1,
			height * 0.1,
			width * 1.2,
			height * 1.2
		);
		temperature =25;
		gradientStroke.addColorStop(0, color(random(250), random(250),random(250),210));
		gradientStroke.addColorStop(0.5, color(0, 200,250,110));
		gradientStroke.addColorStop(1, color(0, 200,250,110));

		drawingContext.strokeStyle = gradientStroke;
  	drawingContext.filter = 'blur(5px)';

	
  for (j=0; j<400; j++) { // row
		  let randx =random(800);
	    let randy =random(-100,800);
			stroke(random(255),random(255),255,200);
		  drawingContext.filter = 'blur('+random(random(50))+'px)';
			//line(randx,randy,randx,randy+random(80,100));
		//line(randx,randy,randx,randy+random(180,200));
		  line(randx,randy,randx+random(3,40),randy+random(300,400));
			
    }
}
