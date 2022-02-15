//-- Ejemplo 11. MODULO FS
//-- Gestión de errores en lectura ASÍNCRONA

const fs = require('fs');

//-- Fichero a leer
const FICHERO = 'fich1.txt';

fs.readFile(FICHERO, 'utf8', (err, data) => {

    if (err) {  //-- Ha ocurrido algun error
      console.log("Error!!")
      console.log(err.message);
    } 
    else {  //-- Lectura normal
        console.log("Lectura completada...")
        console.log("Contenido del fichero: \n")
        console.log(data);
    }
})

