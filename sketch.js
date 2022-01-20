var Santiago;
var llaves;
var cofres;
var puertas;
var paredes;

function preload(){
  llaveVerde=loadImage("llave verde.png");
  llaveLila=loadImage("llave lila.png");

  cofreAzulCerrado=loadAnimation("cofre azul cerrado.png");
  cofreRojoCerrado=loadAnimation("cofre rojo cerrado.png");

  cofreAzulAbierto=loadAnimation("cofre azul abierto.png");
  cofreRojoAbierto=loadAnimation("cofre azul abierto.png");
}

function setup() {
  createCanvas(1500,700);
  
 Santiago=createSprite(100, 500, 15, 15);
 Santiago.shapeColor="#ACA40C";

 pared1=createSprite(50,500,10,100);
 pared2=createSprite(85,450,80,10);
 pared3=createSprite(125,550,160,10);
 pared4=createSprite(120,400,10,110);
 pared5=createSprite(200,500,10,100);
 pared6=createSprite(170,350,105,10);
 pared7=createSprite(490,450,590,10);
 pared8=createSprite(780,510,10,120);
 pared9=createSprite(615,570,340,10);
 pared10=createSprite(450,620,10,100);
 pared11=createSprite(675,670,460,10);
 pared12=createSprite(900,560,10,230);
 pared13=createSprite(970,450,140,10);
 pared14=createSprite(1040,560,10,230);
 pared15=createSprite(1250,670,420,10);
 pared16=createSprite(1455,515,10,320);
 pared17=createSprite(1150,350,620,10);
 pared18=createSprite(840,305,10,100);
 pared19=createSprite(1045,250,420,10);
 pared20=createSprite(1260,195,10,120);
 pared21=createSprite(1345,130,180,10);
 pared22=createSprite(960,30,950,10);
 pared23=createSprite(490,185,10,300);
 pared24=createSprite(540,330,110,10);
 pared25=createSprite(590,230,10,200);
 pared26=createSprite(660,130,150,10);
 pared27=createSprite(740,240,10,230);
 pared28=createSprite(535,350,420,10);
 pared29=createSprite(330,185,10,320);
 pared30=createSprite(185,30,300,10);
 pared31=createSprite(40,80,10,100);
 pared32=createSprite(130,130,190,10);
 pared33=createSprite(220,240,10,230);

 puerta1=createSprite(275,340,80,20);
 puerta1.shapeColor="#BE2AC7";
 puerta2=createSprite(1030,400,20,80);
 puerta2.shapeColor="#2648D8";
 puerta3=createSprite(1420,80,20,80);
 puerta3.shapeColor="#FF0000";
 puerta4=createSprite(730,80,20,80);
 puerta4.shapeColor="#3DEC1D";

 llave1=createSprite(90, 80, 15, 15);
 llave1.addImage(llaveVerde);
 llave1.scale=0.15;
 llave2=createSprite(495,620,15,15);
 llave2.addImage(llaveLila);
 llave2.scale=0.15;

 cofre1=createSprite(1400,625,30,30);
 cofre1.addAnimation("crc",cofreRojoCerrado);
 cofre1.scale=0.3;
 cofre1=createSprite(540,290,30,30);
 cofre1.addAnimation("cac",cofreAzulCerrado);
 cofre1.scale=0.3;

}

function draw() {
  background(48,22,8); 
  
  if(keyDown("W")){
    Santiago.y=Santiago.y-5;
  }

  if(keyDown("S")){
    Santiago.y=Santiago.y+5;
  }

  if(keyDown("A")){
    Santiago.x=Santiago.x-5;
  }

  if(keyDown("D")){
    Santiago.x=Santiago.x+5;
  }

  Santiago.collide(pared1);
  Santiago.collide(pared2);
  Santiago.collide(pared3);
  Santiago.collide(pared4);
  Santiago.collide(pared5);
  Santiago.collide(pared6);
  Santiago.collide(pared7);
  Santiago.collide(pared8);
  Santiago.collide(pared9);
  Santiago.collide(pared10);
  Santiago.collide(pared11);
  Santiago.collide(pared12);
  Santiago.collide(pared13);
  Santiago.collide(pared14);
  Santiago.collide(pared15);
  Santiago.collide(pared16);
  Santiago.collide(pared17);
  Santiago.collide(pared18);
  Santiago.collide(pared19);
  Santiago.collide(pared20);
  Santiago.collide(pared21);
  Santiago.collide(pared22);
  Santiago.collide(pared23);
  Santiago.collide(pared24);
  Santiago.collide(pared25);
  Santiago.collide(pared26);
  Santiago.collide(pared27);
  Santiago.collide(pared28);
  Santiago.collide(pared29);
  Santiago.collide(pared30);
  Santiago.collide(pared31);
  Santiago.collide(pared32);
  Santiago.collide(pared33);
    
  drawSprites();
}