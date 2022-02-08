const http = require('http');

//-- Definir el puerto a utilizar
const PUERTO = 8080;

//-- Crear el servidor. La función de retrollamada de
//-- atención a las peticiones se define detnro de los
//-- argumentos
const server = http.createServer((req, res) => {
    
  //-- Indicamos que se ha recibido una petición
  console.log("Petición recibida!");
});

//-- Activar el servidor: ¡Que empiece la fiesta!
server.listen(PUERTO);

console.log("Servidor activado. Escuchando en puerto: " + PUERTO);
