/*
### Ejercicios 

#### Nivel Intermedio

1. Define una función `saludoPersonalizado` que reciba un nombre y muestre un saludo personalizado en la consola.

const saludoPersonalizado = (nombre : string) : string => `Hola mi nombre es: ${nombre}`;

console.log(saludoPersonalizado("Alberto"));


2. Crea una función `promedio` que calcule el promedio de tres números.


const promedio = (number1 : number , number2 : number , number3 :number) : string => 
`El promedio de los tres numeros es: ${(number1 + number2 + number3)/3}`;

console.log(promedio(3,5,7));


3. Crea una función que reciba un parámetro de tipo string y devuelva la longitud de esa cadena.

const parametro = (nombre : string , apellido : string) : string => 
`La longitud de tu nombre y apellidos es: ${nombre.length + apellido.length}`;

console.log(parametro("alberto", "gomez"));


#### Nivel Difícil
4. Implementa una función `areaDelRectangulo` que reciba base y altura y retorne el área.

const areaDelRectangulo = (base : number , altura :number) => 
base * altura ;

console.log(`El área del rectángulo es: ${areaDelRectangulo(5,4)}`);


5. Crea una función que reciba un número y devuelva si es par o impar.

const formula = (numero : number ) : string => numero % 2 === 0 ? "par" : "impar";

console.log (`El numero proporcionado es: ${formula(15)}`);

6. Define una función `convertirACelsius` que reciba una temperatura en Fahrenheit y la convierta a Celsius.


// const convertirACelsius = ( tempFar: number) : string => ((tempFar - 32) * (5/9)).toFixed(3);
// 
// console.log (`La temperatura en celsius será: ${convertirACelsius(105)}`);

// alternativa con parsefloat

const convertirACelsius = (tempFar: number) : number => parseFloat(((tempFar-32) * (5/9)).toFixed(3));

console.log(`La temperatura en celsius será: ${convertirACelsius(105)}`);


7. Implementa una función que reciba un objeto con propiedades `nombre` y `edad`, y muestre en la consola un mensaje que incluya ambos.

interface persona {

    nombre: string;
    edad: number;
}


const nombrePersona : persona ={nombre:"Alberto"  , edad : 35};

console.log(`El nombre es ${nombrePersona.nombre} y la edad es ${nombrePersona.edad} años.`);



#### Nivel Avanzado
8. Implementa una función que use `instanceof` para verificar si un objeto es un array y retorne un mensaje adecuado.

No puedo hacerlo aún por los arrays

9. Crea una función que acepte un parámetro que puede ser de tipo `string | null` y maneje ambos casos correctamente.

const prueba = (dato: string | null) : string => dato === null ? "es nulo" : dato ;

console.log(`Nulo o ${prueba(null)} `);
console.log(`Nulo o ${prueba("Hola")}`);

10. Define una interfaz `Persona` con propiedades `nombre` y `edad`, y crea una función que reciba un objeto de tipo `Persona` 
y muestre sus propiedades.

interface Persona {
    nombre: string;
    edad : number;
}

const nombrePersona : Persona = {

nombre: "Alberto",
edad : 34,

}


console.log(`Me llamo ${nombrePersona.nombre} y tengo ${nombrePersona.edad} años.`);


*/

