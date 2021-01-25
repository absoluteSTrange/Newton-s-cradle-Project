class Rope {
    constructor(bodyA, bodyB, xOffset){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10,
            pointB:{x:xOffset,y:0}     


        }

        this.rope = Constraint.create(options);
        this.xOffset = xOffset;

        World.add(world, this.rope);
    }

   
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        stroke("white");
        strokeWeight(3);
        line(pointA.x, pointA, pointB.x + this.xOffset, pointB.y);

    }
}