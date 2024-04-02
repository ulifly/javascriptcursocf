// las funciones sirven para encapsilar codigo y hacerlo reutilizable
// las funciones se pueden llamar varias veces
// una funcion se puede definir usando una declaracion de funcion o una expreson de funcion

// declaracion de funcion
let nombre = 'Tony Stark';

function helloworld(){
    console.log('hola mundo');
}

function saludar(nombre){
    console.log('hola ' + nombre);
}
helloworld();
saludar(nombre);

// expresion de funcion

let cuadrado = function(numero){
    return numero * numero;
}
console.log(cuadrado(5));