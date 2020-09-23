class Bob  {
    constructor(x, y) {
      
      var options = {
        isStatic:false,
         restitution:1,
          friction:0, 
          density:0.8
      }

    this.body = Bodies.circle(x, y, 70, options);
    
    
    World.add(world, this.body);

    }
      display(){
      var pos = this.body.position;
     
      var angle = this.body.angle;
  
      push();
      //translate(pos.x, pos.y);
      
      strokeWeight(3);
      stroke('white')
      fill('violet')
      ellipse(pos.x,pos.y,50,50);
      pop();
    };
  };