const WebSocketServer = require('websocket').server;
const http = require('http');
const express = require('express');
const colors = require('colors');

const PUERTO = 8080;

//-- Crear una aplicación web vacia
const app = express();

//-- Asociar el servidor http con la app de express
const server = http.Server(app);

//-- Crear el servidor de websockets, asociado al servidor http
const wsServer = new WebSocketServer({httpServer: server});

//-- Conexión al websocket
wsServer.on('request', (req) => {
    console.log("Conexión establecida".yellow);

    //-- Esperar a recibir mensajes
    const connection = req.accept();

    //-- Retrollamada de mensaje recibido
    connection.on('message', (message) => {
        console.log("MENSAGE RECIBIDO");
        console.log("  Tipo de mensaje: " + message.type);
        if (message.type === 'utf8') {
            console.log("  Mensaje: " + message.utf8Data.green);

            //-- Enviar el eco
            connection.sendUTF(message.utf8Data);
        }
    });

    //-- Retrollamada de cierre de conexión
    connection.on('close', (reasonCode, description) => {
        console.log("Conexión cerrada".yellow + ". Código: " + reasonCode + ". Razón: " + description);
    });

});

//---- Páginas WEB con express

//-- Definir el punto de entrada principal de mi aplicación web
app.get('/', function (req, res) {
    res.send('Bienvenido a mi aplicación Web!!!' + '<p><a href="/test.html">Test</a></p>');
});

//-- El directorio publico contiene ficheros estáticos
app.use(express.static('public'));

//-- Lanzar el servidor HTTP
//-- ¡Que empiecen los juegos de los WebSockets!
server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);
