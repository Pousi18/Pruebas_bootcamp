
const mensajePuntuacionSimulacion = document.getElementById("mensaje-simulacion");
if (
  mensajePuntuacionSimulacion !== null &&
  mensajePuntuacionSimulacion !== undefined &&
  mensajePuntuacionSimulacion instanceof HTMLDivElement
) {
}



//Hay que generar el numero aleatorio

let puntuacionJugador = 0;

const numeroAleatorio = () => {
  const numero = Math.floor(Math.random() * 6) + 1;
  numero > 7 ? numero + 2 : numero;
};

const mostrarImagenCarta = (url: string) : void => {
  const imagenCarta = document.getElementById("imagenCarta");
  if (
    imagenCarta !== null &&
    imagenCarta !== undefined &&
    imagenCarta instanceof HTMLImageElement
  ) {
    imagenCarta.src = url;
  }
};

const obtenerImagenCarta = (numeroCarta: number) : void => {
  switch (numeroCarta) {
    case 1:
      mostrarImagenCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
      );

      break;

    case 2:
      mostrarImagenCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
      );

      break;

    case 3:
      mostrarImagenCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
      );

      break;

    case 4:
      mostrarImagenCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
      );

      break;

    case 5:
      mostrarImagenCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
      );

      break;

    case 6:
      mostrarImagenCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
      );

      break;

    case 7:
      mostrarImagenCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
      );

      break;

    case 10:
      mostrarImagenCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
      );

      break;

    case 11:
      mostrarImagenCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
      );

      break;

    case 12:
      mostrarImagenCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
      );

      break;

    default:
      console.error("Carta no reconocida");
  }
};


//Calcular puntuacion carta

const calcularPuntuacionCarta = (numeroCarta: number)  => {
const puntuacion = numeroCarta >= 10 ? 0.5 : numeroCarta;
   puntuacionJugador += puntuacion;
}

//Pongo una funcion para mostrar la puntuación del jugador

const muestraPuntuacionJugador = () => {

const mostrarPuntuacion = document.getElementById("puntuacion");
 if (
    mostrarPuntuacion !== null &&
    mostrarPuntuacion !== undefined &&
    mostrarPuntuacion instanceof HTMLDivElement
 ) {
    mostrarPuntuacion.textContent = `Puntuacion: ${puntuacionJugador} `
 }

 }

//Pongo la suma de la puntuacion y el mensaje que dicta el ejercicio

const comprobarResultado = ()  => {
  
  const mostrarMensajePuntuacion = document.getElementById("mensaje-puntuacion");
  if (
   mostrarMensajePuntuacion !== null &&
   mostrarMensajePuntuacion !== undefined &&
   mostrarMensajePuntuacion instanceof HTMLDivElement
 ){
    mostrarMensajePuntuacion.textContent="";
 }

 if (puntuacionJugador < 4) {
       mostrarMensajePuntuacion.textContent = `Has sido muy conservador`;
      } else if (puntuacionJugador === 5) {
       mostrarMensajePuntuacion.textContent = `Te ha entrado el cangelo eh?`;
      } else if (puntuacionJugador === 6 || puntuacionJugador === 7) {
       mostrarMensajePuntuacion.textContent = `Casi , casi`;
      } else if (puntuacionJugador === 7.5) {
       mostrarMensajePuntuacion.textContent = `¡Los has clavado! ¡Enhorabuena!`;
      }
   
     //Sale en rojo  

}



 const sumarPuntuacionJugador = (numeroCarta: number) => {
   
    calcularPuntuacionCarta(numeroCarta);

    muestraPuntuacionJugador();

    comprobarResultado();

   
 };

const nuevaPartida =  ()  =>{
  puntuacionJugador = 0
  muestraPuntuacionJugador();
  const botonSolicitar = document.getElementById("nueva-partida");
  if (botonSolicitar !== null && botonSolicitar instanceof HTMLButtonElement) 
    {  botonSolicitar.addEventListener("click", botonSolicitar) }



}

//faltaria mensaje de estado has ganado , casi cas etc
//faltaria boton nueva partida
//faltaria boton reinicio
//faltaria boton que hubiera pasado