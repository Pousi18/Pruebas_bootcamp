window.addEventListener("DOMContentLoaded", () => {
//Generar número aleatorio


function numeroAleatorio () {

    return Math.floor(Math.random()*100)+1;

}

let numeroAcierto  =  numeroAleatorio();

// Llamo a los botones, input del Dom

const buttonInsertar = document.getElementById("insertar") as HTMLButtonElement;
const inputTurno = document.getElementById("nuevo-turno") as HTMLInputElement;
const mensajeAdivinar = document.getElementById("retorno-mensaje") as HTMLDivElement;
const buttonReinicio = document.getElementById("reset") as HTMLButtonElement;

//capturar la entrada al usuario y ponerle si ha adivinado o no

function inputUsuario () {

   const intentoUsuario = parseInt(inputTurno.value);


    if(intentoUsuario>numeroAcierto){

        mensajeAdivinar.textContent = `El número que has introducido es mayor al número`;
        
    }else if (intentoUsuario<numeroAcierto){

         mensajeAdivinar.textContent =`El número que has introducido es menor al número`;

    }else if (intentoUsuario===numeroAcierto){

         mensajeAdivinar.textContent =`Lo has adivinado`;
    }

    inputTurno.value = "";

}

buttonInsertar.addEventListener("click" , inputUsuario);

// funcion reinicio del juego

function reiniciarJuego(){

numeroAcierto = numeroAleatorio();

inputTurno.value = "";

mensajeAdivinar.textContent = ""

}

buttonReinicio.addEventListener("click" , reiniciarJuego);

});