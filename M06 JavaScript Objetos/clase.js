var arr = [1,2,3]
console.log(arr[0])

// var obj = {nombre: 'Raul', edad:31, mexicano:true}
// console.log(obj.nombre)
// console.log(obj['edad'])

var obj = {
    nombre: 'Raul',
    edad:31,
    decirHola: function(){
        return 'Hola ' + this.nombre;
    },
    amigos: [],
    estudio: {
        universidades: ['UdeA', 'UNAL'],
        profesores: ['Auri', 'Feli'],
        nombre: 'Pablo',
        imprimir: function(){
            return this.nombre
        }
    }
};


console.log(obj.estudio.imprimir())



console.log(obj['nombre'])
for (let prop in obj){
    console.log(prop)
    console.log(obj[prop])
}


console.log(obj.hasOwnProperty('amigos'));

// function decirHola(){
//     return 'Hola'
// }

console.log(obj.decirHola())

// obj.nombre = 'Carlos'
// console.log(obj);
// delete obj.nombre;
// console.log(obj);
// obj.nombre = 'Deiry'
// console.log(obj);