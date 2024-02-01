const fs = require("fs")

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        // Leido
        console.log(data.toString());        
    });
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, function(err) {
        if(err) {
            console.error('No he podido borrarlo', err);
        }else {
            console.log('Archivo borrado');
        }
    });    
}

//escribo el archivo
escribir(__dirname + '/archivo.txt', 'Argentina Campeón del mundo ⭐⭐⭐\nHola, Pepe...como va??');

//leo el archivo
leer(__dirname + '/archivo.txt');

//borrar archivo
borrar(__dirname + '/archivo.txt', console.log);