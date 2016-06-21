var bubbles = [];
function setup() {

    createCanvas(windowWidth,windowHeight);
    //var n = 4;
    //for(i =0; i< n; i++){
    //    bubbles[i] = new Bubble();
    //}


}

function draw() {
    background(0);

    for(i = 0; i<bubbles.length; i++){
        bubbles[i].move();
        bubbles[i].display();
        for(j = 0; j<bubbles.length; j++){
            if(i != j && bubbles[i].intersects(bubbles[j])){
                bubbles[i].speedX=bubbles[i].speedX*-1;
                bubbles[i].speedY=bubbles[i].speedY*-1;
            }
        }
    }




}
function mousePressed() {

    bubbles.push(new Bubble(mouseX,mouseY))
}

function Bubble(x,y) {

    this.x = x;
    this.y = y;
    this.r = random(10,20);
    this.speedX = random(-2,2);
    this.speedY = random(-2,2);
    this.color = fill(random(0,255));
    this.ban = true;

    this.display = function(){
        if(this.ban==true){
            rect(this.x,this.y,this.r*2,this.r*2);
            this.color;
        }
        if(this.ban==false){
            ellipse(this.x,this.y,this.r*2,this.r*2);
            this.color;
        }


    };

    this.move = function() {
        if(this.x<0 || this.x>width ){
            this.speedX *= -1;
            if(this.ban==true){
                this.ban=false;
            }else{
                this.ban=true;
            }
        }
        if(this.y<0 || this.y>height ){
            this.speedY *= -1;
            if(this.ban==true){
                this.ban=false;
            }else{
                this.ban=true;
            }
        }
        this.x +=this.speedX;
        this.y +=this.speedY;
    };

    this.intersects = function(other) {
        var d = dist(this.x,this.y,other.x,other.y);
        if(d < this.r+ other.r){
            return true;
        }else{
            return false;
        }
    }

}

//document.write(cube(3));
//function cube(x) {
//
//    var cubo= Math.pow(x,3);
//    return cubo;
//}

//grados();
//dolares();
//
//function convertidorGrados(c) {
//    var f = c * 9 / 5 + 32;
//    return(c + " grados centigrados son: " + f + " grados en Fahrenheit" + "<br>");
//}
//function grados() {
//    var c = 0;
//    var  f= convertidorGrados(c);
//    document.write(f);
//};
//
//function dolares() {
//    var dolares = 400;
//    var resultado = convertidor(dolares);
//    document.write(dolares + " dolares son: " + resultado + " pesos colombianos");
//}
//function convertidor(dollars) {
//    var pesos =dollars * 3000;
//    return pesos;
//}