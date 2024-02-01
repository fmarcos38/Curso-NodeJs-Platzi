const bcrypt = require('bcrypt');

const password = '1234Segura!'; // Contraseña a encriptar

// Encriptar la contraseña
bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);

    // Comparar la contraseña
    bcrypt.compare(password, hash, (err, res) => {
        console.log(res);
    });
});



