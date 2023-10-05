// var rock = [Metallica, Ramnstein, Slipt, IronMaiden, Kiss]

// bucles

// lista de canciones => bucles finitos

// pista de atletismo => bucles infinitos

// Bucle For
// var canciones = [Met, Ram, ..., Kiss]
// i

// for (var persona = 0; persona < 10; persona ++){
//     console.log("Que viva el Rock and Roll!");
// }

// sumar los primeros tres numeros enteros

// var suma = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

// var suma = 0 // 1

// for(var i=1; i <= 4; i++1){
//     // i = 2
//     suma = suma + i
// }

// console.log(suma);

//

function suma (numInicial, numFinal){
    for(var i=numInicial; i <= numFinal; i++){
        suma = suma + i;
    }

    return suma
}

var result = suma(1,4)
// console.log(result);

var String = 'Hola mundo'
//console.log(String.charAt(9));

for(var i=0; i<String.length; i++);{
    var letra =String.charAt(i)
}
