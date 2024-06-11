// Canvas Fishing Scene

// Setup canvas
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = 400;
cnv.height = 400;

//animation vars
let cloud1X = 50;
let cloud1Y = 40
let cloud2X = 150;
let cloud3X = 250;

let sunY = 50;
requestAnimationFrame(draw);
// sky 
let skyR = 173;
let skyG = 216;
let skyB = 230;


function draw() {
  ctx.fillStyle = `rgb(${skyR},${skyG},${skyB})`;
  ctx.fillRect(0,0,cnv.width,cnv.height);
  
  // sun
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(75,sunY,20,0,2*Math.PI);
  ctx.fill();
  
  // clouds
  let cloud = document.getElementById('cloud');
  ctx.drawImage(cloud, cloud1X, cloud1Y, 75, 50);
  ctx.drawImage(cloud, cloud2X, 10, 75, 50);
  ctx.drawImage(cloud, cloud3X, 50, 75, 50);
  
  // Water
  ctx.beginPath();
  ctx.fillStyle = 'blue';
  ctx.fillRect(0,250,cnv.width,250);
  
  // Pier and posts
  ctx.beginPath();
  ctx.fillStyle = 'brown';
  ctx.fillRect(0,200,250,25);
  
  // loop the 4 posts
  for (let i=5; i<=155; i+=50){
    ctx.fillRect(i,150,10,350);
  }
  
  // fisherperson
  // head
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(250, 140, 15, 0, 2 * Math.PI);
  ctx.stroke();
  
  // torso
  ctx.beginPath();
  ctx.moveTo(248,155);
  ctx.lineTo(243,195);
  ctx.stroke();
  
  // upper leg
  ctx.beginPath();
  ctx.moveTo(243,195);
  ctx.lineTo(265,205);
  ctx.stroke();
  
  // lower leg
  ctx.beginPath();
  ctx.moveTo(265,205);
  ctx.lineTo(270,230);
  ctx.stroke();
  
  // arm
  ctx.beginPath();
  ctx.moveTo(246,170);
  ctx.lineTo(280,180);
  ctx.stroke();
  
  // fishing pole
  ctx.strokeStyle = 'gray';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(275,190);
  ctx.lineTo(350,100);
  ctx.stroke();
  
  // fishing lineTo
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(350,100);
  ctx.lineTo(350,300);
  ctx.stroke();
  
  // fishhead 1
  ctx.fillStyle = 'green';
  ctx.beginPath();
  ctx.arc(220, 300, 10, 0, 2 * Math.PI);
  ctx.fill();
  
  // fishhead 2
  ctx.fillStyle = 'green';
  ctx.beginPath();
  ctx.arc(300, 325, 10, 0, 2 * Math.PI);
  ctx.fill();
  
  // fishtail 1
  ctx.beginPath()
  ctx.moveTo(220,300);
  ctx.lineTo(240,290);
  ctx.lineTo(240,310);
  ctx.fill();
  
  // fishtail 2
  ctx.beginPath()
  ctx.moveTo(300,325);
  ctx.lineTo(320,315);
  ctx.lineTo(320,335);
  ctx.fill();

  // animation 
  cloud1X = cloud1X + 0.50;
  cloud2X = cloud2X + 0.90;
  cloud3X = cloud3X + 0.75;

  if (cloud1X >= 400) {
    cloud1X = -75;
    cloud1Y = Math.random() * 150;
  }

  if (cloud2X >= 400) {
    cloud2X = -75;
  }

  if (cloud3X >= 400) {
    cloud3X = -75;
  }

  //sun set
  if (sunY >= 250) {
    sunY = 0;
  }
  
  sunY = sunY + 1 //or sunY++
  
    //blue sky color: rgb(173,216,230)
  // sunset color: rgb(255,165,230)
  
  if (skyR <= 255) {
    skyR++
  }

  if (skyG >= 165) {
    skyG--
  }

  if (skyB >= 0) {
    skyB--
  }



  

  requestAnimationFrame(draw);
}
