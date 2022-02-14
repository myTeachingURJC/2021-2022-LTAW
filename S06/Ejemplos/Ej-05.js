//-- Imprimir la cookie recibida

const http = require('http');
const fs = require('fs');
const PUERTO = 8080;

//-- Cargar pagina web de prueba
const EJ5_HTML = fs.readFileSync('Ej-05.html','utf-8');

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

  //-- Determinar el contenido del mensaje de respuesta
  let content_type = "text/html";
  let content = EJ5_HTML.replace("HTML_EXTRA","");

  //-- Leer la Cookie recibida y mostrarla en la consola
  const cookie = req.headers.cookie;

  //-- Hay cookie
  if (cookie) {
    
    //-- Obtener un array con todos los pares nombre-valor
    let pares = cookie.split(";");
    
    //-- Variable para guardar el usuario
    let user;

    //-- Recorrer todos los pares nombre-valor
    pares.forEach((element, index) => {

      //-- Obtener los nombres y valores por separado
      let [nombre, valor] = element.split('=');

      //-- Leer el usuario
      //-- Solo si el nombre es 'user'
      if (nombre.trim() === 'user') {
        user = valor;
      }
    });

    //--- Si la variable user está asignada
    if (user) {

      //-- Añadir a la página el nombre del usuario
      console.log("user: " + user);
      content = EJ5_HTML.replace("HTML_EXTRA", "<h2>Usuario: " + user + "</h2>");
    }

  }

  //-- Enviar la respuesta
  res.setHeader('Content-Type', content_type);
  res.write(content);
  res.end()

});

server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);

