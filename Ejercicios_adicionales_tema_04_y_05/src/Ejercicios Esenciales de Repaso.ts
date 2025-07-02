/* Ejercicios Esenciales de Repaso
Funciones básicas
1.	Implementa una función que muestre por consola “Hola Mundo”.

let bootcamp : string = "Hola mundo";

console.log(`${bootcamp}`);


2.	Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.

const saludar = (saludo : string) : string => saludo;

console.log(`${saludar("Buenos días")}, ¿como estás?`);

3.	Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.

const mayuscula = ( prueba : string) : string => prueba.toUpperCase();

console.log(`${mayuscula("Hola, buenos días")}`);


4.	Implementa una función que dado un string como parámetro devuelva el string en minúsculas.

const minuscula = ( prueba : string) : string => prueba.toLowerCase();

console.log(`${minuscula("HOLA , BUENAS NOCHES")}`);



5.	Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.

const suma = (numeroA : number , numeroB : number) : number => (numeroA + numeroB);

const numeroA : number = 10;

const numeroB : number = 10;

console.log(`La suma del número A: ${numeroA} más el número B: ${numeroB} es: ${suma(numeroA,numeroB)}`);



6.	Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.


const cadenaNumero = (pala : string , segundo : string , intento : string) : string => 
(pala + segundo + intento);

const pala : string = "Aprender programación";

const segundo : string = " es muy divertido.";

const intento : string ="Aunque fustrante en muchos casos."

console.log(`Las palabras ${pala} , ${segundo} y ${intento} no tiene sentido pero 
puedo juntarlas con una función de javasCript o typesCript y quedaría de la siguiente forma: ${cadenaNumero(pala,segundo,intento)}`);

7.	Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ 
inicializada a null.





Funciones con if/else, switches y comprobaciones


8.	Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null .


const dato = (numero : any) : string => {
    if( numero === null){
        return "El valor es null"
    }else if (numero === undefined){
        return "El valor es undefined"
    }else{
        return "El valor ni es null o undefined"
    }
        
}

console.log (`Comprobación de la variable ${dato(5)}`);

En este caso iria a por switch ya que podría integrar todos los tipos.


const dato = ( ejem : any) : string => {
    switch(ejem) {
        case undefined : return "El valor es undefined";
        case null : return "El valor es null";
        default : return "El valor no es undefined o null";
    }
}

console.log(`El valor de la variable es: ${dato(undefined)}`);



9.	Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.


const numeroAdmin = (numer : number ) : string => numer >= 0 ? "El número es positivo" : "El número es negativo";

console.log(`${numeroAdmin(-1)}`);


10.	Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, 
menor que 100 o exactamente 100.


const evaluarNumer = (numer : number ) : string => 
    numer > 100 ? "Mayor que 100" : 
    numer < 100 ? "Menor que 100" :
    "100" ;
let numer = 100;
console.log(`El ${numer}  es => ${evaluarNumer(numer)}`);

11.	Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no.
 
Averiguar propiedad named dentro del objeto

12.	Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.


const evalua = (nume1 : number , nume2 : number) : string => nume1 % nume2 === 0 

? `El número ${nume1} es divisible por el número ${nume2}`

: `El número ${nume1} no es divisible por el número ${nume2}`;

console.log(evalua(3,2));


13.	Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres.


const evalua = (letra : string , numer : number) => letra.length === numer 
    ? `El texto tiene ${numer} letras`
    : `El texto no tiene ${numer} letras ,  tiene ${letra.length} `;

    
console.log(evalua("Ho" , 2));

    
console.log(evalua("Hola" , 30));


14.	Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva 
que día de la semana es (en texto).

const semana = (diaSemana : number) : string => {

switch(diaSemana){

case 1: return "Lunes";
case 2: return "Martes";
case 3: return "Miércoles";
case 4: return "Jueves";
case 5: return "Viernes";
case 6: return "Sábado";
case 7: return "Domingo";
default : return "Día inválido";
}


}


console.log(semana(1));




15.	Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.

const evaluaMes = (mesAño:number) : string => {

    switch (mesAño){
         
        case 1 : return "Enero";
        case 2 : return "Febrero";
        case 3 : return "Marzo";
        case 4 : return "Abril";
        case 5 : return "Mayo";
        case 6 : return "Junio";
        case 7 : return "Julio";
        case 8 : return "Agosto";
        case 9 : return "Septiembre";
        case 10 : return "Octubre";
        case 11 : return "Noviembre";
        case 12 : return "Diciembre";
        default : return "Mes inválido"
        

    }
}

console.log(evaluaMes(11));



*/
