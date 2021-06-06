class ground {
    constructor(x,y,width,height){
        var grn = {
            isStatic : true ,

        }
       this. body = Bodies.rectangle(x,y,width,height,grn);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    } 
    display(){
    
    rectMode(CENTER);
    fill("green");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    console.log("hii")
    }
}