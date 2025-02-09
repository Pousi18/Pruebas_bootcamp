/* Primer ejemplo

const Acertar = (numerAcer : number , numerNoacer : number) : string => {
    if(numerAcer === numerNoacer){
        return "Has acertado";
    }else{
        return "No has acertado";
    }
}

console.log(Acertar(7,5));


¿Porque console.log lo pone en if y lo declara en la función?

¿Es mejor poner console.log en la funcion o fuera de la funcion?

¿Por que se pone punto y coma al final de la llave?

*/

/* Segundo ejemplo:  Superar número de intentos 

const superarIntentos = (numerIntent : number , maxIntent : number) : string => {

if( numerIntent <= maxIntent){
    return "No has superado los intentos";
}else{
    return "Has superado los intentos";
}

}

console.log(superarIntentos(8,6));


*/

/* Adivinar número mayor que 100 */

// Primero hago las funciones

const numerAlea = () : number => Math.floor((Math.random() * 100) + 1);

const numeroAcierto : number = numerAlea ();

type Estado = 
| "noNumer"
| "pistaNumeroMayor"
| "pistaNumeroMenor"
| "siNumerSecreto"
| "gameOver" ;

const numeroMaxIntentos : number = 5;

let numeroIntentos : number = 0;


//Función para ver número max de intentos

const superarIntentosMax = () : boolean => 

    numeroIntentos >= numeroMaxIntentos

// Mostrar numero de intentos

const muestraNumerIntentos = ()  => {
    const elementoIntentos = document.getElementById("intentos");
    if(elementoIntentos) {
        elementoIntentos.innerHTML = `${numeroIntentos} de ${numeroMaxIntentos}`

        }else{
            console.error("muestraNumerIntentos: No se ha encontrado el elemento con id intentos");
        }
    }

    document.addEventListener("DOMContentLoaded" , muestraNumerIntentos);

const gestionGameOver = (estado : Estado) => {
    if (estado === "gameOver") {
        const elementoComprobar = document.getElementById("comprobar");
        if(elementoComprobar !== null  && elementoComprobar !== undefined && elementoComprobar instanceof HTMLButtonElement){
            elementoComprobar.disabled = true;
        }else{
            console.error("muestraNumerIntentos: No se ha encontrado el elemnto con id intentos");
        }
    }
}



//Función para mostrar los mensajes del numero 
//
const mostrarComprobacion = (texto : string , estado : Estado) => {

    let mensaje : string = "";

   switch(estado) {

    case "noNumer" : 
    mensaje= `${texto} , no es un numero`
    break;

    case "pistaNumeroMayor":
    mensaje =`El ${texto} , es mayor`
    break;

    case "pistaNumeroMenor":
    mensaje =`El ${texto} , es menor`
    break;

    case "pistaNumeroMayor":
    mensaje =`Bienn el ${texto} es el número acertado `
    break;

    case "gameOver":
    mensaje = `Has superado el número de intentos`

    default : 
    mensaje=`No deberías estar aquí`
    break;

   }

   const elementoResultado = document.getElementById("resultado");
   if(elementoResultado){
    elementoResultado.innerHTML = mensaje;
   }else{
    console.error("muestraNumerIntentos: No se ha encontrado el elemnto con id intentos");
   }

}


//comprobamos el numero

const comprobarNumer = (texto : string) : Estado => {
    const numero  = parseInt(texto);
    const esNumer = !isNaN(numero);
    



if(!esNumer){
 return "noNumer";

}

if(numero === numeroAcierto){
    return "siNumerSecreto";
}

if(superarIntentosMax()){
    return "gameOver";
}

return numero > numeroAcierto
? "pistaNumeroMayor"
: "pistaNumeroMenor";

 }

const handleCompruebaClick = () =>{
let texto : string = "";
const inputElement = document.getElementById("numero");
if(inputElement != null && inputElement != undefined && inputElement instanceof HTMLInputElement) {
    texto = inputElement.value;
}

const estado : Estado = comprobarNumer(texto);
mostrarComprobacion(texto,estado); 
numeroIntentos++;
muestraNumerIntentos();
gestionGameOver(estado);
}

const comprobarBoton  = document.getElementById("comprobar");

    if(comprobarBoton!= null && comprobarBoton != undefined && comprobarBoton instanceof HTMLElement){
        comprobarBoton.addEventListener("click" , handleCompruebaClick);

    }else{

        console.error("muestraNumerIntentos: No se ha encontrado el elemento con id intentos");

    }
    




