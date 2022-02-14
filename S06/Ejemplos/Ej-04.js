//-- Imprimir la cookie recibida

const http = require('http');
const fs = require('fs');
const PUERTO = 8080;

//-- Cargar pagina web de prueba
const EJ4_HTML = fs.readFileSync('Ej-04.html','utf-8');

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

  //-- Leer la Cookie recibida y mostrarla en la consola
  const cookie = req.headers.cookie;

  if (cookie) {
    console.log("Cookie: " + cookie);
  }
  else {
    console.log("Petición sin cookie");
  }

  //-- Determinar el contenido del mensaje de respuesta
  let content_type = "text/html";
  let content = EJ4_HTML;

  //-- Enviar la respuesta
  res.setHeader('Content-Type', content_type);
  res.write(content);
  res.end()

});

server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);

