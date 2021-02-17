class Donnie 
{
         constructor()
         {
             this.Donnie = loadImage("images/Donnie.png")
         }

         displayStart()
         {
              image(this.Donnie,660,200,300,300)

         }

         display(x,y)
         {
               image(this.Donnie,x,y)

         }
}