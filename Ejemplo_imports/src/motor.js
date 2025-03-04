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


import{

} from './motor'



    export const generarNumeroAleatorio = () => Math.floor(Math.random() * 101);

    export const hasSuperadoElNumeroMaximoDeIntentos = () =>
        numeroDeIntentos >= MAXIMO_INTENTOS;

    export const comprobarNumero = (texto) => {
      const numero = parseInt(texto);
      const esUnNumero = !isNaN(numero);
      if (!esUnNumero) {
        return NO_ES_UN_NUMERO;
      }
      if (numero === numeroParaAcertar) {
        return ES_EL_NUMERO_SECRETO;
      }
      if (hasSuperadoElNumeroMaximoDeIntentos()) {
        return GAME_OVER_MAXIMO_INTENTOS;
      }
      return numero > numeroParaAcertar ? EL_NUMERO_ES_MAYOR : EL_NUMERO_ES_MENOR;
    };