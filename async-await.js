/**
 * La sintaxis async/await en JavaScript proporciona una forma más limpia y 
 * legible de trabajar con código asincrónico que utiliza promesas. Al marcar una función como async, 
 * permite utilizar la palabra clave await dentro de la función para esperar que una promesa 
 * se resuelva antes de continuar con la ejecución.
 */

async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola', nombre);
            resolve(nombre);
        }, 1000);
    });
}
async function hablar(nombre) { //paso el nombre como parametro para que se pueda usar en la funcion siguiente
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
}
async function adios(nombre) {
    return new Promise((res, rej) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            res(nombre);
        }, 1000);
    });
}

async function main() {
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminamos proceso...');
}
console.log('Inicia proceso...');
main();