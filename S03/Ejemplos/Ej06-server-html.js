const http = require('http');

const PUERTO = 8080;

//-- Texto HTML
const pagina = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Happy Server!</title>
</head>
<body style="background-color: lightblue">
    <h1 style="color: green">HAPPY SERVER!!!</h1>
</body>
</html>
`

const server = http.createServer((req, res)=>{
    console.log("Petición recibida!");

    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader('Content-Type','text/html');
    res.write(pagina);
    res.end();
});

server.listen(PUERTO);

console.log("Ejemplo 6. Happy Server HTML!. Escuchando en puerto: " + PUERTO);
