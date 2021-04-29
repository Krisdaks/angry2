class Slingshot{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointA = pointA
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    display(){
        if (this.Slingshot.bodyB){
        var pointA = this.pointA;
        var pointB = this.Slingshot.bodyB.position;
        push();
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
    fly(){
        this.Slingshot.bodyB = null
    }
        
}