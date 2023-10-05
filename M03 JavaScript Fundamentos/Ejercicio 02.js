/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// var mensaje = devolverString('Hola');
// console.log(mensaje);

// devolverString('Hola')

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return(x + y);
}

// console.log(suma(1,6));

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return(x - y);
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return(x / y);
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return(x * y);
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return (x % y);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
