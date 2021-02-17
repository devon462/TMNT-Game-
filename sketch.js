var Leo, leoImage, leoFight
var Raph, raphImage
var Donatello, donnieImage
var Michelangelo, mikeyImage
var sewerBackground
var form 
function preload() 
{
   /*leoImage = loadImage("images/Leopng")
   leoFight = loadAnimation("Turtle4.png","Turtle3.png","Turtle5.png")
   raphImage = loadImage("images/Turtle_4-removebg-preview.png")
   donnieImage = loadImage("images/417-4174998_free-png-download-ninja-tutle-donatello-clipart-png-donatello-ninja-turtle-cartoon-removebg-preview.png")
   mikeyImage = loadImage("images/Mikey-removebg-preview.png")*/
   sewerBackground = loadImage("images/CirKPg.jpg")
}

function setup() {
  createCanvas(1300,700);

  Leo = new Leonardo()
  Raph = new Raphael()
  Donatello = new Donnie()
  Michelangelo = new Mikey()
  form = new Form()
}
function draw() {
  background(sewerBackground); 
  
  Raph.displayStart()
  Leo.displayStart()
  Donatello.displayStart()
  Michelangelo.displayStart()
   form.display()

  drawSprites();
}




    
  