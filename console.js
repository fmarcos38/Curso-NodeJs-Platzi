//vista de consola
console.log('Hola mundo');
console.info('Hola mundo');
console.warn('Hola mundo');
console.error('Error');
var tabla = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'x'
    }
];
console.table(tabla);
//agrupar logs
console.group('Conversación');
console.log('Hola');
console.log('Blablabla');
console.log('adios');
console.groupEnd('bla');
