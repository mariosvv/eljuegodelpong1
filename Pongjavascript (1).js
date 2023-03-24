let estado;
let bola;
let barra;
let cuenta=0;
 
class Bola{
	constructor(x,y,velX,velY,rad,color){
		this.x = x;
		this.y = y;
		this.velX = velX;
		this.velY = velY;
		this.rad = rad;
		this.color = color;
	}
	
	girarX(){
			this.velX = -this.velX;
	}
	
	girarY(){
			this.velY = -this.velY;
	}
	
	rebotar(){
			 this.velY = -this.velY+0.25;
		   cuenta=cuenta+1;
			 if(cuenta==3){
		   	this.color = '#eeacac';
				 this.rad=this.rad-10;
			}
	     if(cuenta==6){
		   	this.color='#f57979';
				 this.rad=this.rad-15;
	    }
	     if(cuenta==10){
		   	this.color='#fb5252';
				 this.rad=this.rad-20;
	    }
		   if(cuenta==20){
		   	this.color='#ad0404';
				 this.rad=this.rad-30;
	    }
			if(cuenta==40){
		   		estado=2;		
	    }
			
	}
	
	dibujar(){
		fill(this.color);
		ellipse(this.x,this.y,this.rad);
	}
	
	moverX(){
		this.x = this.x - this.velX;
	}
	
	moverY(){
		this.y = this.y - this.velY;
	}
}

class Barra{
	constructor(x,y,ancho,alto){
		this.x = x;
		this.y = y;
		this.ancho = ancho;
		this.alto = alto;
	}
	
	dibujar(){
		rectMode(CENTER);
		fill(0,0,0);
		rect(this.x,this.y,this.ancho,this.alto);
	}
	
	mover(){
		this.x = mouseX;
	}
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(204,255,0);
	bola = new Bola(random(100,windowWidth-100),200,5,5,60,(255,255,255));
	barra = new Barra(mouseX,windowHeight-50,200,25);
}

function draw(){
  background(204,255,0);
	bola.moverX();
	bola.moverY();
	bola.dibujar();
	barra.dibujar();
	barra.mover();
	
	if(bola.y >= barra.y - barra.alto && bola.y <= barra.y +barra.alto && bola.x-bola.rad >= barra.x-barra.ancho && bola.x+bola.rad <= barra.x+barra.ancho){
		bola.rebotar();
	}
	
	if(bola.x <= 30 || bola.x >= windowWidth-30){
		bola.girarX();
	}
	
	if(bola.y <= 30){
		bola.girarY();
	}
	
	if(bola.y > windowHeight+100){
		estado = 1;
	}
	if(estado==2){
		textSize(120);
		fill(0);
		text("HAS GANADO",windowWidth/4,windowHeight/2);
		barra.ancho=100000;
	}
	if(estado === 1){
		textSize(120);
		fill(0);
		text("HAS PERDIDO",windowWidth/4,windowHeight/2);
	}
	
}