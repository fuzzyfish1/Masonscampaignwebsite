 function setup(){
 	createCanvas(400,400)
 }

 function draw(){
 	let hour = hour();
 	let minute = minute();
 	let second = second();
	fill(255);
	noStroke();
	text(hour+':'+minute+':'+second);

 }