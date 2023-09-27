//Posição e tamanho da bolinha
let Xbolinha = 300;
let Ybolinha= 200;
let diametro = 25;
let raio = 12.5;

//velocidade da bolinha 
let velocidadedabolinhaX = 6;
let velocidadebolinhaY = 6;

//raquete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let RaqueteAltura = 90;

funcion setup() { 
  createCanvas( 600, 400); 
} 

funvtion draw() {
   background(0);
   mostraBolinha()
  movimentoBolinha();
  colideBorda();
  mostraRaquete();
  movimentaRaquete();
   colideRaquete
 }
 //
function mostraBolinha() { 
   circle(Xbolinha, Ybolinha, diametro);
} 
function mostraBolinha () { 
  XBolinha+= VelocidadeDabolinhaX;
 YBolinha+=  VeloidadeDaBolinhaY;
}
function colideBorda(){
  if (xBolinha > width ||xBolinha < 0 ) {
    velocidadeXBolinha *= -1;
  }
   if (yBolinha > height||yBolinha < 0 ){
        velocidadeYBolinha *= -1;
   }
}
function mostraRaquete() {
   rect(xRaquete, raqueteComprimento, RaqueteAltura);
}
  
