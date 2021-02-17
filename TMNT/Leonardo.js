class Leonardo 
{
    constructor()
    {
       this.Leonardo = loadImage("images/Leonardo.png")

    }
displayStart()
{
    image(this.Leonardo,260,210,200,200);
}
    
    display(x, y)
    {
        image(this.Leonardo,x,y);
    }
}