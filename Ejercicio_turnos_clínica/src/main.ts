//Funciones Dom

const numeroActual = document.getElementById("turno-actual")
const botonSiguiente = document.getElementById("siguiente");
const botonAnterior = document.getElementById("anterior");
const botonReset = document.getElementById("reset");
const botonTurno = document.getElementById("cambiar");
const inputCaja = document.getElementById("nuevo");

//Variable turno actual

let turnoActual = 0;

//funcion actualizar turno con padstart

const actualTurno = () => {

    if(numeroActual instanceof HTMLHeadingElement){
        numeroActual.textContent = turnoActual.toString().padStart(2 ,"0");
    }

}

//Aumentar el turno

const aumentaTurno = () =>{
    turnoActual = Math.max(0, turnoActual + 1);
    actualTurno();
}

//Disminuir turno

const dismiTurno = () => {
    turnoActual = Math.max(0, turnoActual - 1);
    actualTurno();
}

//Reset

const rese = () => {
    turnoActual = 0;
    actualTurno();
}

//Turno del operador

const turnoOperador = () =>{
    if(inputCaja instanceof HTMLInputElement){
        turnoActual=parseInt(inputCaja.value);
        turnoActual = Math.max(0 , turnoActual);
        actualTurno();

    }
}



//Condicionales de los botones siguiente , anterior , 
// reset e input (el turno que pone el operador)

if(botonSiguiente instanceof HTMLButtonElement){
    botonSiguiente.addEventListener("click" , aumentaTurno);
}

if(botonAnterior instanceof HTMLButtonElement){
    botonAnterior.addEventListener("click" , dismiTurno);
}

if(botonReset instanceof HTMLButtonElement){
    botonReset.addEventListener("click" , rese);
}

if (botonTurno instanceof HTMLButtonElement){
    botonTurno.addEventListener("click" , turnoOperador);
}