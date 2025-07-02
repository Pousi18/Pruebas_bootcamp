/* Declara una variable en JavaScript con let llamada saludo y asigna el valor "Hola, mundo". 
Imprímela en la consola. 

let saludo : string = "Hola, Mundo";

console.log (saludo);

*/

/* 2.	Crea una constante en TypeScript llamada PI y asigna el valor 3.1416. 
Intenta reasignarla y observa el error.



const Pi : number = 3.1416;

let Pi : number = 3.56; //Da error

*/

/* Declara una variable en TypeScript llamada usuario con el tipo string | null. 
Inicialízala con null y luego asigna un nombre.



let usuario : string | null = null;

usuario = "Pepe";

console.log(`El usuario es; ${usuario}`);
*/

/* 4.	Crea un objeto en JavaScript con las propiedades nombre, edad y ciudad. 
Imprime sus valores. 



let persona = {
    
    nombre : "Albert" , 
    edad : 18 ,
    ciudad : "Valencia",
    
};

console.log(`nombre : ${persona.nombre} , edad: ${persona.edad} , 
ciudad: ${persona.ciudad}`);
    
*/

/*

5.	Define una interfaz en TypeScript llamada Libro con las propiedades titulo, autor y año. 
Crea un objeto basado en esa interfaz.



interface libro  {

titulo : string;

autor : string;

año : number;



};


const elTesoro : libro = {

    titulo : "Mapa" , 
    autor : "Mendez",
    año : 1989,
}

console.log(`Título: ${elTesoro.titulo} , Autor: ${elTesoro.autor} , 
Año: ${elTesoro.año}`);

*/

/*
6.	Escribe un programa en JavaScript 
que calcule el precio final de un producto aplicando un descuento y un IVA.



let precio : number = 10;

let descuento : number = 10;

let iva : number = 0.21;

let precioFinal : number = (descuento - precio) - (precio * iva);

console.log(`El precio final es: ${precioFinal} €`);

*/

/*7.	Crea una variable en JavaScript que almacene una cadena de texto usando template strings. 
Incluye variables dentro del texto.



let saludo : string = "Hola";

let nombre :string = "Albert"

console.log(`${saludo} soy ${nombre}`);

*/

/* Declara dos variables en TypeScript: base y altura, ambas de tipo number. 
Calcula el área de un triángulo (base * altura / 2) y muestra el resultado.



let base : number = 16;

let altura :number = 30;

let areaDelTriangulo : number = (base * altura) / 2;

console.log(`El área del triángulo es : ${areaDelTriangulo} cm`);


*/ 

/* Usa el tipo any en TypeScript para declarar una variable que almacene diferentes tipos de datos. 
Cambia su valor varias veces y muestra los resultados.




let dato : any = "cualquier";

console.log(`Dato es: ${dato}`);

let dato : number = 187;

console.log(`Dato es ahora: ${dato}`);

*/

/*10.	Define una variable en TypeScript que solo permita valores de tipo string o un número mayor a 10. 
Intenta asignar diferentes valores y observa los errores.


let datos : string | number = "pepe";

console.log(`Datos es : ${datos}`);

datos : number = 15;

console.log(`Datos es ahora : ${datos}`);

datos : number = 8;  Dará error



*/