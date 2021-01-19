var sword,swordImage;



function preload(){
swordImage=loadAnimation("sword.png");  
 
}
function setup(){
  createCanvas(400,400);
  
  //sword is created
  sword=createSprite(200,100,10,10);
  sword.setCollider("rectangle", 25 , -30 , 50 , 50 , 35);
  sword.scale = 0.5;
  sword.addAnimation("sword",swordImage);
}





function draw(){

}
