//-- Servidor JSON

const http = require('http');
const fs = require('fs');
const PUERTO = 8080;

//-- Cargar la Página de error
const ERROR = fs.readFileSync('error_page.html');

//-- Cargar pagina web principal
const MAIN = fs.readFileSync('Ej-03.html','utf-8');

//-- Leer fichero JSON con los productos
const PRODUCTOS_JSON = fs.readFileSync('Ej-01.json');

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

    //-- Construir el objeto url con la url de la solicitud
    const myURL = new URL(req.url, 'http://' + req.headers['host']);  
  
    //-- Variables para el mensaje de respuesta
    let content_type = "text/html";
    let content = "";
  
    //-- Leer recurso y eliminar la / inicial
    let recurso = myURL.pathname;
    recurso = recurso.substr(1); 

    switch (recurso) {
        case '':
            console.log("Main page");
            content = MAIN;
            break;

        case 'productos':
            console.log("Peticion de Productos!")
            content_type = "application/json";
            content = PRODUCTOS_JSON;
            break;

        case 'cliente-2.js':
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

            //-- Si no es ninguna de las anteriores devolver mensaje de error
        default:
            res.setHeader('Content-Type','text/html');
            res.statusCode = 404;
            res.write(ERROR);
            res.end();
            return;
    }
  
    //-- Generar respuesta
    res.setHeader('Content-Type', content_type);
    res.write(content);
    res.end()
  
  });
  
  server.listen(PUERTO);
  console.log("Escuchando en puerto: " + PUERTO);
  