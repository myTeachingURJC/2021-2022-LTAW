const WebSocketServer = require('websocket').server;
const http = require('http');

//-- Vamos a dar un poquito de color...
const colors = require('colors');

const PUERTO = 8080;

//-- Crear servidor. No tiene recursos implementados
//-- (siempre devuelve error)
const server = http.createServer( (req, res) => {
    console.log('Solicitud http: ' + req.url);
    res.writeHead(404);
    res.end();
});

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

//-- Lanzar el servidor
//-- ¡Que empiecen los juegos de los WebSockets!
server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);
