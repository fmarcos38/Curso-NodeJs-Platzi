const os = require('os');

console.log('Sistema Operativo: ', os.platform());
console.log('Sistema Operativo: ', os.arch());
console.log('Sistema Operativo: ', os.cpus()); // Información de los núcleos
console.log('Numero de nucleos: ', os.cpus().length); // Número de núcleos