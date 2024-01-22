let i=0;
let intervalo = setInterval(() => {
    i++;
    console.log('Hola developer, te saluda tu amigo el setInterval', + i);
    if(i===3){
        clearInterval(intervalo); // Detiene el intervalo
        console.log('Intervalo detenido');
    }            
    }, 1000);

    //ver documentacion en la pag oficial de nodeJS
