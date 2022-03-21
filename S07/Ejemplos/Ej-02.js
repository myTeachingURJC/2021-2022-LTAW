//-- Servidor JSON

const http = require('http');
const fs = require('fs');
const PUERTO = 8080;

//-- Cargar pagina web principal
const MAIN = fs.readFileSync('Ej-02.html','utf-8');

//-- Leer fichero JSON con los productos
const PRODUCTOS_JSON = fs.readFileSync('Ej-01.json');

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

    //-- Construir el objeto url con la url de la solicitud
    const myURL = new URL(req.url, 'http://' + req.headers['host']);  
  
    //-- Por defecto entregar página web principal
    let content_type = "text/html";
    let content = MAIN;
  
    //-- Leer recurso y eliminar la / inicial
    let recurso = myURL.pathname;
    recurso = recurso.slice(1);
    console.log(recurso);

    switch (recurso) {
        case 'productos':
            content_type = "application/json";
            content = PRODUCTOS_JSON;
            break;

        case 'cliente-1.js':
            //-- Leer fichero javascript
            console.log("recurso: " + recurso);
            fs.readFile(recurso, 'utf-8', (err,data) => {
                if (err) {
                    console.log("Error: " + err)
                    return;
                } else {
                  res.setHeader('Content-Type', 'application/javascript');
                  res.write(data);
                  res.end();
                }
            });
            
            return;
            break;
    }
  
    //-- Generar respuesta
    res.setHeader('Content-Type', content_type);
    res.write(content);
    res.end()
  
  });
  
  server.listen(PUERTO);
  console.log("Escuchando en puerto: " + PUERTO);
  