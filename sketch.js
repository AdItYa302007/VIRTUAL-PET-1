var dog;
var happyDog;
var database;
var foodS,foodStock;

function preload()
{
dog_img1 = loadImage("dogImg.png");
dog_img2 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,50,50);
  dog.addImage(dog_img1);
  var foodStockRef = database.ref("Food")
  foodStockRef.on("value",(data)=>{
  foodS = data.val();
  });

}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dog_img2);
}
drawSprites();
fill("red");
text("FOOD REMAINING"+foodS,200,210);

}


function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x= x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
