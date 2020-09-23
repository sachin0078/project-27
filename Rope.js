class Rope{
    constructor(bodyA,pointB ){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 100
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
fly(){
    this.rope.bodyA=null;
}
    display(){
        text(mouseX+"-"+ mouseY,400,50)
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(4);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
    }
    
}
