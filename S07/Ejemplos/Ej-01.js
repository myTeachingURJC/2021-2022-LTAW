//-- Servidor JSON

const http = require('http');
const fs = require('fs');
const PUERTO = 8080;

//-- Cargar pagina web principal
const MAIN = fs.readFileSync('Ej-01.html','utf-8');

//-- Leer fichero JSON con los productos
const PRODUCTOS_JSON = fs.readFileSync('Ej-01.json');

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

    //-- Construir el objeto url con la url de la solicitud
    const myURL = new URL(req.url, 'http://' + req.headers['host']);  
  
    //-- Por defecto entregar página web principal
    let content_type = "text/html";
    let content = MAIN;
  
    if (myURL.pathname == '/productos') {
        content_type = "application/json";
        content = PRODUCTOS_JSON;
    }
  
    //-- Generar respuesta
    res.setHeader('Content-Type', content_type);
    res.write(content);
    res.end()
  
  });
  
  server.listen(PUERTO);
  console.log("Escuchando en puerto: " + PUERTO);
  