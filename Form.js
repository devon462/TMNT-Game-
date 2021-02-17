class Form {

    constructor() {
      this.button = createButton('Play');
      this.title = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Teenage Mutant Ninja Turtles");
      this.title.position(displayWidth/2 - 50, 0);
  
      
      this.button.position(200,200);
  2
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        
      });
  
    }
  }
  