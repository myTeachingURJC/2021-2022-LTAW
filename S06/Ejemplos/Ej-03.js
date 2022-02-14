//-- Imprimir información sobre la solicitud recibida

const http = require('http');
const fs = require('fs');
const PUERTO = 8080;

//-- Cargar pagina web del formulario
const FORMULARIO = fs.readFileSync('form1.html','utf-8');

//-- HTML de la página de respuesta
const RESPUESTA = fs.readFileSync('form1-resp2.html', 'utf-8');

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

  //-- Construir el objeto url con la url de la solicitud
  const myURL = new URL(req.url, 'http://' + req.headers['host']);  

  //-- Leer los parámetros
  let nombre = myURL.searchParams.get('nombre');
  let apellidos = myURL.searchParams.get('apellidos');
  console.log(" Nombre: " + nombre);
  console.log(" Apellidos: " + apellidos);
  

  //-- Por defecto entregar formulario
  let content_type = "text/html";
  let content = FORMULARIO;

  if (myURL.pathname == '/procesar') {
      content_type = "text/html";

      //-- Reemplazar las palabras claves por su valores
      //-- en la plantilla HTML
      content = RESPUESTA.replace("NOMBRE", nombre);
      content = content.replace("APELLIDOS", apellidos);

      //-- si el usuario es Chuck Norris se añade HTML extra
      let html_extra = "";
      if (nombre=="Chuck" & apellidos=="Norris") {
         html_extra = "<h2>Chuck Norris no necesita registrarse</h2>";
      }
      content = content.replace("HTML_EXTRA", html_extra);
  }

  //-- Enviar la respuesta
  res.setHeader('Content-Type', content_type);
  res.write(content);
  res.end()

});

server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);

