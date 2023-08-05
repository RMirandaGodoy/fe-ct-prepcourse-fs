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

// function saludo (nombre, apellido){
//     console.log(arguments.length)
// }

// saludo ('Aura', 'Sandoval')


// function suma(...args){
//     console.log(args)
//     var suma = 0;
//     for(var arg of args){
//         suma = suma + arg
//     }
//     return suma
// }

// console.log(suma(2,6,8,12,36,45));

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// function encontrarVocalA (String){

// for(var i = 0; i< String.length; i++){
//     if(String[i] === 'a'){
//         return 'Encontramos la vocal a';
//         }
//     }
//     return 'Esta palabra no tiene vocal a'
// }

// console.log(encontrarVocalA('Paula'))

// function cuentaRegresiva(num){
//     for(var i= num; i>=0; i--){
//         console.log(i);
//     }
// }

// cuentaRegresiva(5)

// function deletrear (String){
//     for(var i=0; i< String.length; i++){
//         console.log(i);
//     }
// }

// deletrear('Fatima')

// function mientrasMenorSeis(){
//     var contador = 1;
//     while(contador < 6){
//         console.log('contador es: ' + contador);
//         contador = contador + 1;
//     }
//     return contador
// }

// console.log(mientrasMenorSeis())

// var contador = 0
// do {
//     console.log('Contador ' + contador);
//     contador ++;
//     console.log(contador);
// } while (contador<=5);

// function semaforo(color){
//     switch(color){
//         case 'rojo':
//             return 'Los autos se detienen';
//         case 'amarillo':
//             return 'Los autos avanzan o se detienen';
//         case 'verde':
//             return 'Los autos avanzan';
//         default:
//             return 'Este color no es del semáforo';
//     }
// }

// console.log(semaforo('verde'))

var comidas=['pizza', 'hamburguesa', 'hot dog', 'lasagna']
// for(var i=0; i<comidas.length; i++){
//     console.log(comidas[i]);
//}

for(var comidas of comidas){
    console.log(comidas);
}