function seRompe() {
    return 3 + z;
}
//para manejar errores en nodejs se usa el try catch
try {
    seRompe(); // ReferenceError: z is not defined
} catch (error) {
    console.error('Vaya, algo se ha roto...');
    console.error(error.message);
}

//con o sin error este fragmento de codigo se ejecuta siempre
console.log('Esto de aqui está al final');