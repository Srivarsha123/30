class Cup extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("cup.png");
      this.visibility = 255;
    }
    display(){
      if(this.body.speed>=0){
      super.display();
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      }
      else{
        World.remove(world, this.body)
        push();
        this.visibility = this.visibility - 5
        tint(255, this.visibility)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
      console.log(this.body.speed)
    }
  };