const numerAleatorio = () => Math.floor(Math.random()*100) +1;

const numeroAcierto = numerAleatorio();


const no_es_un_numero = 0;
const es_numero_mayor = 1;
const es_numero_menor = 2;
const es_el_numero_secreto = 3;
const game_over = 4;

let numeroDeIntentos = 0;


const maxIntentos = 5;


const muestraNumeroIntentos = () =>{

    document.getElementById("intentos").innerHTML = `${numeroDeIntentos} de ${maxIntentos}`;


}

document.addEventListener("DOMcontentLoaded" , muestraNumeroIntentos);


const gestionarGameOver = (estado) => {
    if(estado===game_over){
        document.getElementById("comprobar").disabled = true;
    }

}


const numeroMaxIntentos = () => numeroDeIntentos >= maxIntentos;


const muestraMensajeComprobacion = (texto ,estado) => {

    let mensaje = "";

    switch(estado){

        case no_es_un_numero:

        mensaje = `${texto} No es un número te has equivocado`;

        break;
        
        case es_numero_mayor:
        
        mensaje = `El ${texto} es mayor que el número secreto vuelve a intentarlo`;
        
        break;

        case es_numero_menor:
        
        mensaje = `El ${texto} es menor que el número secreto vuelve a intentarlo`;

        break;

        case es_el_numero_secreto:
        
        mensaje = `Enhorabuena los has acertado`;
        
        break;

        case game_over:
        
        mensaje = `Has superado el número de intentos`;

        break;

        default:
        mensaje = `No se que ha pasado`

        break;

    }


    document.getElementById("resultado").innerHTML = mensaje;
}


const comprobarNumero = (texto) => {
    const numero = parseInt(texto);
    const esUnnumero = !isNaN(numero);

    if(!esUnnumero) {
        return no_es_un_numero;
    }

    if( numero === numeroAcierto){
      return es_el_numero_secreto;
    }

    if(numeroMaxIntentos()){
        return game_over;
    }
    return (numero > numeroAcierto)
        ? es_numero_mayor
        : es_numero_menor;
    
    
}


const handleCompruebaClick = () => {

    const texto = document.getElementById("numero").value;
    const estado = comprobarNumero (texto);
    muestraMensajeComprobacion(texto,estado);
    numeroDeIntentos++;
    muestraNumeroIntentos();
    gestionarGameOver(estado);
}




const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click" , handleCompruebaClick);
