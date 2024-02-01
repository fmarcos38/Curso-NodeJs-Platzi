const { app, BrowserWindow } = require('electron');

let mainWindow; // creo una variable global para la ventana principal

app.on('ready', createWindow); // cuando la app esta lista, creo la ventana principal


//funcion para crear la ventana principal
function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

