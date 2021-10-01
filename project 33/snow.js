class Snow {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(this.x, this.y, this.radius);
        World.add(world, this.body);
      }
  
      display(){
        var snowPos = this.body.position;
        push();
        translate(snowPos.x, snowPos.y);
        ellipseMode(CENTER);
        circle(0,0,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
      }
    };