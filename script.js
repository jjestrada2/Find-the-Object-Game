console.log("hola mund");



let  getRandom =size=>{
    return Math.floor(Math.random()*size);
  }
  
  let getDistance=(e,target)=>{
    let diffX= e.offsetX- target.x;
    let diffY= e.offsetY-  target.y;
    return Math.sqrt((diffX*diffX)+(diffY*diffY));
    
  }
  //creo una instacio para el body
  let body =document.getElementById("body");
  
  let getDistanceHint=(distance)=>{
    if(distance<50){
      //cambio colr de fondo 
       body.setAttribute("class","bg-danger text-white ");
      return "INFIERNO";
    }
    else if(distance<70){
      //cambio colr de fondo 
       body.setAttribute("class","bg-danger text-white ");
      return "QUEMANDO";
    }
    else if(distance<90){
      //cambio colr de fondo 
       body.setAttribute("class","bg-warning text-white ");
      return "TIBIO";
      
    }
    else if(distance<120){
      //cambio colr de fondo 
       body.setAttribute("class","bg-warning text-white ");
      return "CERCA";
    }
    else if(distance<150){
      //cambio colr de fondo 
      body.setAttribute("class","bg-info text-white ");
      return "FRIO";
    }
    else if (distance<170){
      //cambio colr de fondo 
       body.setAttribute("class","bg-primary text-white ");
      return "CONGELADO";
    }
    else {
      //cambio color
      body.setAttribute("class","bg-ligth text-dark ");
      return "PERDIDO";
    }
  }

  
const W = 550;
const H = 550;

//banano escondida detras de arbol
let target = {
  x: 55, //getRandom(W),
  y: 174 //getRandom(H)
};

//Pinguino
let target2 = {
  x: 192,
  y: 103
};

//Planto de sopa
let target3 = {
  x: 90,
  y: 183
};

//llamo las instacios que necesito del juego.html
//llamo el mapa para saber sus dimensiones
let $map = document.getElementById("map");
//en el documento html creo una variable que se llama distancia para pintar el mensaje de frio o caliente
let $distance = document.getElementById("distance");
//creo una instacia para pintar el nivel del jugador
let $nivel = document.getElementById("nivel");
//creo instancia en el target 
let $target=document.getElementById("target");
//creo la variable clicks  para poder contar
let clicks = 0;
//creo la variable nivel para imprimir
let level = 0;
//pinto la variable nivel
$nivel.innerHTML = "Nivel # :" + (level + 1);

var i = 0;
 //decir cual es el target a buscar 
    $target.innerHTML="Busca una banana"

//creo un metodo en el que se ejecuten a partir de los clicks la funcio getdishint que me da un mensaje
$map.addEventListener("click", function(e) {
  //console.log(e.offsetX);
  //console.log(e.offsetY);
  //evaluo en que nivel estoy entro a nivel 1
  if (level == 0) {
    
    //creo contador para clicks
    clicks++;
    //traigo la iformacion de la distancia del click hasta el objetivo
    let distance = getDistance(e, target);
    //llamo el metodo que me saca mensaje y lo guardo en la variable disHint
    let distanceHint = getDistanceHint(distance);

    //pinto el mensaje que me entrega el metodo getDistanceHint
    $distance.innerHTML = distanceHint;

    //creo un condicional para poder mostrar que se gano si esta cerca del objetivo
    if (distance < 15) {
      alert("GANASTE ¡PRIMER NIVEL DESBLOQUEADO! EN : " + clicks + " CLIKS");

      //hago variable para poder pasar de nivel
      level++;
      //hago que el contador reste uno pora el proximo nivel empieze bien
      clicks = -1;
    }
  }

  //paso al nivel siguiente "2"
  if (level == 1) {
     //decir cual es el target a buscar 
    $target.innerHTML="Busca un pinguino"
    
    //imprimo el nivel en el que se encuentra el cliente
    $nivel.innerHTML = "Nivel # : " + (level+1) ;
    //contador de clicks
    clicks++;
    //traigo la info de distancia entre  traget dos y el click
    let distance = getDistance(e, target2);
    //llamo metodo que me da mensaje
    let distanceHint = getDistanceHint(distance);
    //pantalla negra cuando comience nuevo nivel
    if (i == 0) {
      //pongo bg negro
      body.setAttribute("class", "bg-dark text-white ");
      i++;
    }

    //--------------------------------------
    //console.log(distance);
    //entrego y ejecuto el mensaje de distanceHint a la instacia que habia creado
    $distance.innerHTML = distanceHint;
    //creo un condicional si estoy cerca del target
    if (distance < 15) {
      //alerta de ganador
      alert("GANASTE ¡SEGUNDO NIVEL DESBLOQUEADO!!: " + clicks + " CLIKS");
      //location.reload();
      //aumento contador de nivel para que se pueda pasar al siguiente condicional
      level++;
      //le resto 1 al click para que empieze en cero el nuevo nivel
      clicks = -1;
      //hago i =0 para que el bg del proximo nivel empieze negro
      i = 0;
    }
  }
  //paso al nivel"3"
  if (level == 2) {
     //decir cual es el target a buscar 
    $target.innerHTML="Busca un plato de sopa"
    $nivel.innerHTML = " Nivel # : " + (level+1) ;
    clicks++;
    let distance = getDistance(e, target3);
    let distanceHint = getDistanceHint(distance);
    //pantalla negra cuando comience nuevo nivel
    if (i == 0) {
      body.setAttribute("class", "bg-dark text-white ");
    }
    i++;
    //--------------------------------------------

    console.log(distance);
    $distance.innerHTML = distanceHint;
    if (distance < 15) {
      alert("GANASTE ¡TERCER NIVEL DESBLOQUEADO!!: " + clicks + " CLIKS");
      //location.reload();
      level++;
      clicks = -1;
      i = 0;
      
    }
  }
});
