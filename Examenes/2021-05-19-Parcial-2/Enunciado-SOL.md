# Parcial LTAW. 19-Mayo-2021

* Temario: S6-S10 y L6-L11

20 preguntas. 4 de cada sesión más o menos...


## Pregunta 1. S6. Intercambio de datos entre Clientes y servidores Web a nivel de aplicación

Dado un cliente que accede a un servidor Web, ¿Cuál es el mecanismo general por el que el cliente y el servidor intercambian información a nivel de aplicación?

### Solución

Las aplicaciones WEB intercambian datos a nivel de aplicación usando el **protocolo HTTP**. Se intercambian dos tipos de mensajes: los de solicitud que van desde el cliente al servidor, y los de respuesta que van del servidor al cliente

## Pregunta 2. S6. Datos del cliente al servidor

Indica de manera general las diferentes opciones que tiene un cliente web para enviar datos al servidor

### Solución

Los datos desde el cliente al servidor se envían mediante mensajes HTTP de solicitud. La información se pasa de tres formas diferentes:

* A través de los parámetros de la URL (en los métodos get)
* A través del cuerpo (en los métodos post)
* A través de la cabecera del mensaje de respuesta

## Pregunta 3. S6. Formularios

Indica las dos URLs que hay implicadas en el uso de un formulario web

### Solución

Hay dos URLs implicadas. Una es la URL del formulario. Es un fichero html que contiene el formulario. La otra es la URL de procesamiento de datos. Es la URL a la que se envían los datos del cliente al servidor


## Pregunta 4. S6. Envío de formularios

Tenemos el siguiente formulario al que hemos accedido a través de la URL `http://mi-server/formulario.html`, que tiene dos campos de texto para que el usuario introduzca los datos, y un botón para realizar su envío

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <form action="/xxx" method="get">
        Nombre:
        <input type="text" name="yyy"/>
        <p></p>
        Apellidos:
        <input type="text" name="zzz" />
        <p></p>
          <input type="submit" value="Enviar"/>
    </form>
</body>
</html>
```

Si el usuario introduce "Chuck" en la primera entrada y "Norris" en la segunda y luego pulsa el botón de enviar... ¿Cual es la URL completa de procesamiento que se genera para acceder al servidor?

### Solución

La URL es: `http://mi-server/xxx?yyy=Chuck&zzz=Norris`

* Explicación extendida: 

La URL del servidor la conocemos: `http://mi-server/`. El formulario está situado en el fichero formulario.html de ese servidor y es el que se carga inicialente. El paso de información se hace a través de los parámetros, ya que se trata de un método get. El nombre del recurso al que acceder para enviar los datos es /xxx en el servidor. Los parámetros que se le pasan son yyy y zzz, con los valores introducidos por el usuario: 'Chuck' y 'Norris' 

## Pregunta 5. S6. Cookies

Cuando se usan cookies para el intercambio de información entre clientes y servidores web a través de HTTP, ¿Dónde se coloca esta información de forma general?

### Solución

El intercambio se realiza en la cabecera de los mensajes HTTP, en ambos sentidos. Se utilizan las cabecderas Cookie y Set-Cookie

## Pregunta 6. S6. Cookies II

Un cliente se conecta por primera vez a un servidor web. Se realizan dos peticiones iguales al recurso `/holi`. Al hacer la primera petición el servidor le envía la siguiente cookie como respuesta `date=19/05/2021`. Explica si habría alguna direrencia en la segunda petición del cliente, o sería exactamente igual que la primera


### Solución

La segunda petición sería difente ya que se incluiría en la cabecera la información de la cookie previamente recibida: `date=19/05/2021`

## Pregunta 7. S7. Ajax

Explica de forma general los tipos de peticiones a los que un servidor WEB atiende

### Solución

Los sevidores web atienden dos tipos de peticiones, en general:

* Peticiones del usuario: son las provocadas por la navegación. Se solicitan páginas html, css, javascript, etc...
* Peticiones de aplicaciones: Son peticiones de datos generadas por una aplicación javascript

## Pregunta 8. S7. Peticiones AJAX

Explica brevemente cuáles son los pasos para realizar una petición AJAX

### Solución

* Crear el objeto XMLHttpRequest
* Establecer la función de retrollamada asociado al evento de cambio de estado de la petición
* Enviar la petición al servidor
* Procesar la respuesta

## Pregunta 9. S7. Ajax II

El servidor `mi-server` tiene el punto de entrada `/productos` que devuelve un listado de todos los productos disponibles, en formato JSON

Un usuario realiza las siguiente acciones:

* 1. Escribe la siguiente URL en el navegador: `http://mi-server/index.html` y pulsa enter para acceder
* 2. En página web que aparece pincha en el botón 1

Indica todas las peticiones que realiza el cliente al servidor, en el orden en que suceden e indicando la URL de acceso. En el servidor se encuentran los siguientes ficheros:

* **index.html**:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="client.js" defer></script>
</head>
<body>
    <button id="boton1">Botón 1</button></p>
</body>
</html>
```

* **client.js**:

```js
const boton1 = document.getElementById("boton1");
boton1.onclick = () => {
    const m = new XMLHttpRequest();
    m.onreadystatechange = () => {
        if (m.readyState==4) {
            if (m.status==200) {
                let productos = JSON.parse(m.responseText)
                console.log(productos);
            } 
        }
    }
    m.open("GET","/productos", true);
    m.send();
}
```

### Solución

Peticiones:

1. Petición de pagina principal: http://mi-server/index.html
2. Petición de fichero javascript: http://mi-server/client.js
3. Petición de listado de productos: http://mi-server/productos

## Pregunta 10. S7. Caja de búsqueda
Explica brevemente, y de forma general, cómo sería la arquitectura de una aplicación web en la que hay una caja de búsqueda donde aparecen sugerencias cada vez que se escribe un carácter nuevo. Al apretar ENTER se realiza la búsqueda indicada

### Solución

En la web debe existir un formulario con una caja de texto. Cuando el usuario aprieta Enter se acceder a la URL de procesamiento para devolver una página html con el resultado de la búsqueda. Además en el cliente se debe ejecutar un programa javascript que genere una petición AJAX cada vez que el usuario apriete una tecla para obtener las sugerencias y mostrarlas al usuario

## Pregunta 11. S8. Módulos node

Indica cuales son los tipos de módulos node que hay disponibles y qué hay que hacer para acceder a ellos

### Solución

Hay tres tipos de módulos:

1. Módulos internos: Estás accesibles directmente
2. Módulos node: Se instalan con node. Se importan con require()
3. Módulos externos: hay que instalarlos primero y luego importarlos con require()


## Pregunta 12. S8. NPM

Explica brevemente para qué se usa la herramienta npm

### Solución

NPM es un gestor de paquetes de node. Nos permite instalar fácilmente los paquetes externos de node


## Pregunta 13. S8. Fichero package.json

¿Qué es el fichero package.json?

### Solución

Es un fichero que contiene información sobre nuestro proyecto, en formato json. Etnre otras cosas contiene información sobre las dependencias con otros paquetes, para que nuestra aplicación se instale fácilmente

## Pregunta 14. S8. Express

Dado el siguiente código en node.js, que lo acabamos de bajar de un repositorio y todavía no lo hemos usado. Indica qué debemos hacer para que se ejecute. Una vez arrancado explica qué hay que hacer para probarlo y cómo sabemos que está funcionando


* Fichero: Ej-01.js

```js
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/xxx', (req, res) => {
  res.send('¡¡Holi!!');
});
app.listen(PORT);
```

### Solución

Para ejecutar el programa primero es necesario instalar express con el comando `npm i express`. También se podría instala con `npm i` directamente si el autor ha proporcionado el fichero package.json

Una vez arrancando nos vamos a un navegador y escribirmos la siguiente URL:  `http://localhost/xxx`. Nos debería aparecer una página web con el texto `¡¡Holi!!`


## Pregunta 15. S8. Express II

Modifica el programa de la pregunta 14 para añadir el recurso "/test". Al acceder a él se debe escribir en la consola del servidor el texto "Prueba". No se genera ninguna respuesta HTML, sólo se imprime en la consola ese mensaje

### Solución

El programa es el siguiente:

```js
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/xxx', (req, res) => {
  res.send('¡¡Holi!!');
});

//-- Basta con añadir estas líneas
app.get('/test', (req, res) => {
  console.log("Prueba");
})
app.listen(PORT);
```

## Pregunta 16. S9. Websockets

Explica brevemente la principal ventaja de los *websockets*


### Solución

Los websockets permiten tener una comunicación bidereccional y full-duplex entre clientes y servidores web

## Pregunta 17. S9 Chat

Explica de manera concisa la arquitectura que tiene una aplicación web de Chat

### Solución

Es una arquitectura cliente-servidor en la que el servidor envía la interfaz web (html, css, javascript) a los clientes mediante HTTP. A trasvés de websockets cada cliente envía los mensajes al servidor y este los re-envía al resto de clientes

## Pregunta 18. S9. Websockets y HTTP

Explica la relación entre websokets y HTTP

### Solución

Websockets es un protocolo de aplicación independiente que se sitúa encima de TCP. Se caracteriza porque su negociación inicial se hace a través de HTTP. Una vez establecida la conexión se usa el canal TCP de manera independiente (sin peticiones HTTP adicionales)

## Pregunta 19. S9. Websokets server

Explica de forma general, breve y concisa lo que hace el siguiente código

```js
const WebSocketServer = require('websocket').server;
const http = require('http');

const PUERTO = 8080;

const server = http.createServer( (req, res) => {
    res.writeHead(404);
    res.end();
});

const wsServer = new WebSocketServer({httpServer: server});

wsServer.on('request', (req) => {

    const connection = req.accept();

    connection.on('message', (message) => {
        if (message.type === 'utf8') {
            connection.sendUTF(message.utf8Data);
        }
    });
});
server.listen(PUERTO);
```

### Solucion

Es un servidor de websocket que hace eco de todos los mensajes de texto entrantes

## Pregunta 20. S10. Electron

Describe brevemente qué es Electron

### Solucion

Electron es un paquete para node.js que te permite crear aplicaciones de escritorio con interfaces gráficas usando las tecnologías web: HTML, Javascript y CSS
