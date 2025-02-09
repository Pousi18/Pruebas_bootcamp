//Funciones del dom

const turnoInicio = document.getElementById("turno-inicial");
const botonSiguiente = document.getElementById("siguiente");
const botonAnterior = document.getElementById("anterior");
const botonReset = document.getElementById("reset");
const botonCambiar = document.getElementById("cambiar");
const cambioTurno = document.getElementById("insertar")
//Variable del turno actual

let turnoActual = 0;

//Funcion padstart

const actualizaTurno = () => {

    if (turnoInicio instanceof HTMLHeadingElement) {
        turnoInicio.textContent = turnoActual.toString().padStart(2 , "0");
    }
}

const siguiente = () =>{

    turnoActual = Math.max(0, turnoActual + 1);
    actualizaTurno();
}

const anterior = () => {
    turnoActual = Math.max(0 ,turnoActual - 1);
    actualizaTurno();
}

const reset = () => {
    turnoActual = 0;
    actualizaTurno();
}

const cambio = () => {
    if(cambioTurno instanceof HTMLInputElement){
        turnoActual = parseInt(cambioTurno.value);
        turnoActual = Math.max(0 , turnoActual);
        actualizaTurno();
    }
}


//Eventos click

if(botonSiguiente instanceof HTMLButtonElement){

    botonSiguiente.addEventListener("click" , siguiente )

}

if(botonAnterior instanceof HTMLButtonElement){

    botonAnterior.addEventListener("click" , anterior )
}

if(botonReset instanceof HTMLButtonElement){

    botonReset.addEventListener("click" , reset )
}

if(botonCambiar instanceof HTMLButtonElement){
    botonCambiar.addEventListener("click" , cambio)
}