import{

NO_ES_UN_NUMERO,
setNumeroParaAcertar,
EL_NUMERO_ES_MAYOR,
EL_NUMERO_ES_MENOR,
ES_EL_NUMERO_SECRETO,
GAME_OVER_MAXIMO_INTENTOS,
MAXIMO_INTENTOS,
numeroDeIntentos,
numeroParaAcertar,
setNumeroDeIntentos,

} from './modelo';



//TODO: Esto se puede hacer mejor
setNumeroParaAcertar (generarNumeroAleatorio());



const muestraNumeroDeIntentos = () => {
  document.getElementById(
    "intentos"
  ).innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`;
};
document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);

const gestionarGameOver = (estado) => {
  if (estado === GAME_OVER_MAXIMO_INTENTOS) {
    document.getElementById("comprobar").disabled = true;
  }
};

const muestraMensajeComprobacion = (texto, estado) => {
  let mensaje = "";
  switch (estado) {
    case NO_ES_UN_NUMERO:
      mensaje = `"${texto}" no es un numero 🤨, prueba otra vez`;
      break;
    case EL_NUMERO_ES_MAYOR:
      mensaje = `UUYYY ! El número ${texto} es MAYOR que el número secreto`;
      break;
    case EL_NUMERO_ES_MENOR:
      mensaje = `UUYYY ! El número ${texto} es MENOR que el número secreto`;
      break;
    case ES_EL_NUMERO_SECRETO:
      mensaje = `¡¡¡Enhorabuena, has acertado el número!!! 🎉🎉🎉`;
      break;
    case GAME_OVER_MAXIMO_INTENTOS:
      mensaje = `🪦 GAME OVER, has superado el número máximo de intentos`;
      break;
    default:
      mensaje = "No se que ha pasado, pero no deberías estar aquí";
      break;
  }
  document.getElementById("resultado").innerHTML = mensaje;
};



const handleCompruebaClick = () => {
  const texto = document.getElementById("numero").value;
  const estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  //Todo: se puede implementar una función incrementaNumeroDeIntentos
  setNumeroDeIntentos(numeroDeIntentos +1);
  muestraNumeroDeIntentos();
  gestionarGameOver(estado);
};

const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", handleCompruebaClick);
