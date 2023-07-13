// var comidas = ['pizza', 'hamburguesa', 'lasagna', 'sandwich']

// comidas.push('tamal');
// console.log(comidas);

// comidas.pop();

// console.log(comidas);

// comidas.unshift('tamal');
// console.log(comidas);

// comidas.shift();
// console.log(comidas);

// var autos =['Ford', 'Chevrolet', 'Nissan'];

// autos.forEach(function(auto, indice){
//     console.log(auto, indice);
// })

// var numeros = [2,3,4,5];

// function multiplicarPorTres(num){
//     return num * 3;
// }

// var resultado = numeros.map(multiplicarPorTres);

// var resultado = numeros.map(function(elemento){
//     return elemento * 3
// })
// // console.log(resultado);

// var suma = 0
// for(let i=0; i<numeros.length; i++){
//     suma=suma + numeros[i];
// }

// console.log (suma);

// var suma = numeros.reduce(function(acumulador, elemento){
//     return acumulador + elemento
// },0)

// console.log(suma);

// var numbers = [2,3,4,5,7,9];

// function multiplicarPorDos(a,b){
//     return a * b;
// }

// var producto = numbers.reduce(multiplicarPorDos);

// console.log(producto);



// var palabras=['hola','como', 'estas'];

// var frase=palabras.reduce(function(acumulador, elemento){
//     return acumulador + ' ' + elemento
// }, 'Mi saludo es:')

// console.log(frase)

function saludo (nombre, apellido){
    console.log(arguments.length)
}

saludo ('Aura', 'Sandoval')


function suma(...args){
    console.log(args)
    var suma = 0;
    for(var arg of args){
        suma = suma + arg
    }
    return suma
}

console.log(suma(2,6,8,12,36,45));