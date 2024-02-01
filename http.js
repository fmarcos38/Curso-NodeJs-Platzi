const http = require('http');

//creo funcion para manejar las peticiones
function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch(req.url) {
        case '/hola':
            res.write('Hola, Pepe');
            res.end();
            break;
        case '/adios':
            res.write('Adios, nos vemos');
            res.end();
            break;
        default:
            res.write('Error 404: No sé lo que quieres');
            res.end();
    }
}

http.createServer(router).listen(3000);

console.log('Server levantado en http://localhost:3000');