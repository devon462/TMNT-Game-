class Mikey
{
         constructor()
         {
             this.Mikey = loadImage("images/Mikey.png")
         }

         displayStart()
         {
              image(this.Mikey,660,500,200,200)

         }

         display(x,y)
         {
               image(this.Mikey,x,y)

         }
}