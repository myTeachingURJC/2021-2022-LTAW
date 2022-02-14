const http = require('http');

const PUERTO = 8080;

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

  console.log("Petición recibida")

  //-- Hayppy server. Generar respuesta
  //-- Código: todo ok
  res.statusCode = 200;
  res.statusMessage = "OK :-)";
  res.setHeader('Content-Type', 'text/plain');
  res.write("Soy el happy server\n");
  res.end()

});

server.listen(PUERTO);

console.log("Ejemplo 4. Happy Server listo!. Escuchando en puerto: " + PUERTO);
