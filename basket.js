class Basket {
    constructor(x,y,width,height){
        var option = {
            isStatic: true
        }
        this.BasketBody = Bodies.rectangle(x,y,width,height,option)
        this.Basketwidth = width;
        this.Basketheight = height;
        World.add(world,this.BasketBody)
    }
    display(){
        var pos = this.BasketBody.position
        rectMode(CENTER)
        stroke("pink")
        strokeWeight(3)
        fill("red")
        rect(pos.x,pos.y,this.Basketwidth,this.Basketheight)
    }

}