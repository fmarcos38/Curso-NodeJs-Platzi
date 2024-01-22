function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback();
    }, 1000);
}
function hablar(callback) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callback();
    }, 1000);
}
function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000);
}
//En esta parte del código uso funciones recursivas porque estoy llamando a conversacion dentro de si misma. 
//y mediante un If como estructura de control le digo que cantidad de veces va a  ejectuarse la funcion hablar.
function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}
// --
console.log('Iniciando proceso...');
hola("Marcos",function() {
    conversacion("Marcos", 3, function() {
        console.log('Proceso terminado');
    });
});

