var hps = [];//가로
var vps = [];//세로
var n = 1000;//선의 수
var noiseScale = 200;//숫자가 높아질 수록 뭉침이 적어짐

function setup() {
  createCanvas(1920, 1000);//width,height값
  blendMode(ADD);
  //background(50, 86, 215);//배경색
  background(0);//대비처리
  noiseDetail(1, 10);
  console.log(pixelDensity());
  //generate noise image
  
  //initialize particle
  for(var i=0; i<n; i++){
    var hpp = new Object();//positive
    var vpp = new Object();
    var hpn = new Object();//negative
    var vpn = new Object();
    
    var x = random(width);
    var y = random(height);
    hpp.pos = createVector(x,y);
    hpp.speed = 1;
    vpp.pos = createVector(x,y);
    vpp.speed = 1;
    hpn.pos = createVector(x,y);
    hpn.speed = -1;
    vpn.pos = createVector(x,y);
    vpn.speed = -1;
    hps.push(hpp);//add particle to particle list
    vps.push(vpp);
    hps.push(hpn);
    vps.push(vpn);
  }
}
//border
function draw() {
  //fill(0, 1);
  //rect(0, 0, width, height);
  
  strokeWeight(1);//선 사이즈
  stroke(255, 150);//모였을 때 색상
  stroke(100, 86, 215);//선 색상
  
  
  for(var i=0; i<hps.length; i++){
    var hp = hps[i];//pick a particle
    var vp = vps[i];//pick a particle
    var hangle = noise(hp.pos.x/noiseScale, hp.pos.y/noiseScale)*8;//, 선의 각도 frameCount*0.01
    hp.pos.add(cos(hangle)*hp.speed, sin(hangle)*hp.speed);
    if(hp.pos.x < 0 | hp.pos.x > width || hp.pos.y < 0 || hp.pos.y > height){
      hp.pos.x = random(width);hp.pos.y = random(height);
    }
    
    var vangle = noise(vp.pos.x/noiseScale, vp.pos.y/noiseScale)*10+PI/2;
    vp.pos.add(cos(vangle)*vp.speed, sin(vangle)*vp.speed);
    if(vp.pos.x < 0 | vp.pos.x > width || vp.pos.y < 0 || vp.pos.y > height){
      vp.pos.x = random(width);vp.pos.y = random(height);
    }
    point(hp.pos.x, hp.pos.y);
    point(vp.pos.x, vp.pos.y);
  }
}