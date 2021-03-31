//Primer ejemplo

let numero = prompt('Ingrese numero entre 10 y 50');


parseInt(numero)
if (parseInt(numero) > 10 && parseInt(numero) < 50) {

    console.log(' El numero esta entre 10 y 50');
} else {

    console.log('El numero no esta entre 10 y 50')
};



//Otro ejemplo

let nombre = prompt('Ingrese Nombre');
let cursada = 12345;

if (nombre === 'Facundo' || nombre === 'facundo' && cursada === 12345) {
    console.log('Facundo tu cursada correspondiente es 12345')
} else {
    console.log('Comunicate con el departamento de alumnos, no podemos encontrar tu cursada!')
}