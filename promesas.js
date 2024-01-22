function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola', nombre);
            resolve(nombre);
        }, 1000);
    });
}
function hablar(nombre) { //paso el nombre como parametro para que se pueda usar en la funcion siguiente
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
}
function adios(nombre) {
    return new Promise((res, rej) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            res(nombre);
        }, 1000);
    });
}

// --
console.log('Iniciando proceso...');
hola('Marcos') //llamo a la funcion hola
.then(hablar) //llamo a la funcion hablar cuantas vcs quiero; cuando se resuelva la promesa
.then(hablar) 
.then(hablar) 
.then(adios) //llamo a la funcion adios cuando se resuelva la promesa
.then((nombre) => { //llamo a una funcion anonima cuando se resuelva la promesa
    console.log('Terminado el proceso');
})
.catch(error => { //capturo el error
    console.error('Ha habido un error:');
    console.error(error);
});

/* 
    esta metodologia es mas legible q la del archivo asincrona.js
*/