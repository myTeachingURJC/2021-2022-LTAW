# Final de LTAW. 08-Julio-2021


## Pregunta 1. S1. SGML

Dado el siguiente documento en SGML:

```xml


<!DOCTYPE urjc_ML SYSTEM "urjc_ml.dtd">
<urjc_ml>
  <!-- Define campus = root-tag -->
  <campus>
    <nombre>Campus de Fuenlabrada</nombre>
    <escuela>
      <nombre>ETSI Telecomunicación</nombre>
      <grado>
        <nombre>Ingeniería en Sistemas Audiovisuales y Multimedia </nombre>
        <asignatura>Laboratorio de Tecnologias Audiovisuales en la Web</asignatura>
        <asignatura>Construcción de servicios y Aplicaciones Audiovisuales en Internet</asignatura>
      </grado>
    </escuela>
  </campus>
</urjc_ml>


```

* Indica cuál es la etiqueta raiz del documento
* Indica qué etiquetas están en el nivel 3 de profundidad

### Solución

* La etiqueta raiz es urjc_ml
* Las etiquetas del nivel 3 son:  nombre y asignatura

## Pregunta 2. Markdown

Escribe un documento en markdown que produzca la siguiente salida

![](Images/test-md.png)

### Solución

```md
# FPGAs

## FPGAs libres

### Familias

* ice40
* UP5K
* ECP5

### Placas

1. Alhambra II
2. Icestick
3. ULX3S
4. iceBreaker
5. TinyFPGA
```


## Pregunta 3. S2. Programación asíncrona

Explica en qué consiste la programación asíncrona y qué ventaja tiene a la hora de programar servidores web

### Solución

En la programación asíncrona no se espera a que una tarea termine para iniciar la siguiente, sino que se inicia y se configura para que se llame a una función de retrollamda cuando ha terminado. En paralelo se continua con las siguientes tareas

Tiene la ventana de que reduce los tiempos de espera, ya que se hacen operaciones en background. Esto hace que el servidor tenga un mejor rendimiento

## Pregunta 4. S2. node.js

Explica de forma general lo que hace el siguiente código:
(No lo expliques línea a línea, sino en su totalidad)

```js

const http = require('http');
const server = http.createServer((req, res) => {
  res.write("Hola\n");
  res.end();
});

server.listen(8080);

```

### Solución

Este programa recibe peticiones HTTP y genera un mensaje de respuesta que contiene "hola" en el cuerpo. Su comportamiento es el mismo para cualquier petición recibida (es un happy server)

## Pregunta 5. S3. URL

Indica los diferenes campos de una URL y pon un ejemplo de una que contenga todos

### Solución

La URL está formada por la unión de varios campos:

* Protocolo
* Host
* Recurso
* Fragmento

El resurso a su vez está formado por la ruta y la búsqueda

Ej.  http://localhost:8080/mi_tienda/listado.html?articulo=pendrive#descripción

* Protocolo: http
* Host: localhost:8080
* Recurso: /mi_tienda/listado.html?articulo=pendrive
  * Ruta: /mi_tienda/listado.html
  * Búsqueda: articulo=pendrive
* Fragmento: descripcion


## Pregunta 6. S3. Modulo http

Dado el siguiente código, indica el orden de escritura de los mensajes en la consola al arrancar el servidor y recibir una petición que tiene datos en el cuerpo del mensaje de solicitud

```js

const http = require('http');

const server = http.createServer((req, res) => {
  console.log("\nMENSAJE A")

  req.on('data', (cuerpo) => {
    console.log("MENSAJE B")
  });

  req.on('end', ()=> {
    console.log("MENSAJE C");
    res.setHeader('Content-Type', 'text/plain');
    res.write("Soy el happy server\n");
    res.end()
  });

console.log("MENSAJE D");
});

console.log("MENSAJE E");
server.listen(8080);
console.log("MENSAJE F");

```


### Solución

Dado que esto es programación asíncrona, el ordenan de escritura en la consola está determinado por las funciones de retrollamada. Según acaban una tareas se van realizando las impresiones

* Mensaje E
* Mensaje F
* Mensaje A
* Mensaje D
* Mensaje B
* Mensaje C

## Pregunta 7. S3. HTTP

Un cliente realiza una petición HTTP para acceder a un servidor web. Si el recurso que solicita el cliente es una página html, explica si el servidor debe indicar algo en la cabecera del mensaje de respuesta

### Solucion

El servidor siempre debe incluir en el mensaje de respuesta la cabecera `Content-Type:` indicando el tipo de contenido que lleva en el cuerpo. Si se trata de un documento html debe especificar que es de tipo `text/html`

## Pregunta 8. S3. Modulo fs

Dado el siguiente código, indica el orden de escritura de los mensajes en la consola al ejecutar el programa

```js

const fs = require('fs');
console.log("Mensaje A");
const data1 = fs.readFileSync('fich1.txt','utf8');
console.log("Mensaje B");
const data2 = fs.readFileSync('fich2.txt', 'utf8');
console.log("Mensaje C");

```

### Solución

En este programa se está utilizando el módulo fs para leer ficheros del sistema de ficheros. Como se está utilizando el método readFileSync, las lecturas son síncronas. Es decir, que hasta que no termina una no empieza la siguiente. Por tanto el orden de escritura en la consola es el esperado:

* Mensaje A
* Mensaje B
* Mensaje C

## Pregunta 9. S5. JSON

Una tienda tiene una base de datos para almacenar la siguiente información:

* Productos: En la tienda hay varios productos. Cada producto tiene un campo nombre y otro precio
* Pedidos: Almacena todos los pedidos pendientes que hay. Cada pedido tiene un nombre de cliente (cliente) y una dirección de entrega (direccion)

Actualmente la situación de la tienda es que tiene sólo dos productos A y B, cuyos precios son 10 y 20 respectivamente. Hay un pedido pendiente, realizado por el usuario Chuck Norris cuya dirección es "Puedo vivir donde quiera"

Escribe el documento JSON que almacena esa base de datos en la situación actual

### Solución

```json
{
    "productos": [
        {
            "nombre": "A",
            "precio": 10
        },
        {
            "nombre": "B",
            "precio": 20
        }
    ],
    "pedidos": [
        {
            "cliente": "Chuck Norris",
            "Direccion": "puedo vivir donde quiera"  
        }
    ]
}
```

## Pregunta 10. S5. Variables y Json

Analiza el siguiente programa e indica qué información imprime en la consola

```js

const cad = `[
    {
      "A": {
          "a": [50, 30]
      },
      "D": "Soy A"
    },
    {
      "A": {
          "b": [33, 55]
      },
      "D": "Soy B"
    }
]`
  
  const f = JSON.parse(cad);
  console.log(f[1]["A"]["b"][0]);

```

### Solución:

El programa crea la variable f a partir de la estructura dada en una cadena JSON. Luego se accede al primer número de la propiedad b dentro de la propiedad A del segundo elemento, que vale 33. En la consola se escribe 33


## Pregunta 11. S6. Cookies

Cuando se usan cookies para el intercambio de información entre clientes y servidores web a través de HTTP, ¿Dónde se coloca esta información de forma general?

### Solución

El intercambio se realiza en la cabecera de los mensajes HTTP, en ambos sentidos. Se utilizan las cabecderas Cookie y Set-Cookie

## Pregunta 12. S6. Cookies II

Un cliente se conecta por primera vez a un servidor web. Se realizan dos peticiones iguales al recurso `/holi`. Al hacer la primera petición el servidor le envía la siguiente cookie como respuesta `date=19/05/2021`. Explica si habría alguna direrencia en la segunda petición del cliente, o sería exactamente igual que la primera

### Solución

La segunda petición sería difente ya que se incluiría en la cabecera la información de la cookie previamente recibida: `date=19/05/2021`

## Pregunta 13. S7. Ajax

Explica de forma general los tipos de peticiones a los que un servidor WEB atiende

### Solución

Los sevidores web atienden dos tipos de peticiones, en general:

* Peticiones del usuario: son las provocadas por la navegación. Se solicitan páginas html, css, javascript, etc...
* Peticiones de aplicaciones: Son peticiones de datos generadas por una aplicación javascript


## Pregunta 14. S7. Ajax II

El servidor `mi-server` tiene el punto de entrada `/productos` que devuelve un listado de todos los productos disponibles, en formato JSON

Un usuario realiza las siguiente acciones:

* 1. Escribe la siguiente URL en el navegador: `http://mi-server/index.html` y pulsa enter para acceder
* 2. En ls página web que aparece pincha en el botón 1

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


## Pregunta 15. S8. NPM

Explica brevemente para qué se usa la herramienta npm

### Solución

NPM es un gestor de paquetes de node. Nos permite instalar fácilmente los paquetes externos de node


## Pregunta 16. S8. Express

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


## Pregunta 17. S8. Express II

Modifica el programa de la pregunta 16 para añadir el recurso "/test". Al acceder a él se debe escribir en la consola del servidor el texto "Prueba". No se genera ninguna respuesta HTML, sólo se imprime en la consola ese mensaje

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
