// Objetivo: Ver el tiempo que tarda un proceso en ejecutarse (sincrono)
let suma = 0;

console.time('bucle');
for (let i = 0; i < 1000000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

//Objetivo: Ver el tiempo que tarda un proceso en ejecutarse (Asincrono)
console.time('asincrono');

//funcion asincrona
function asincrona(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            resolve();
        }, 1000);
    });
}

asincrona().then(() => {
    console.timeEnd('asincrono');
});
