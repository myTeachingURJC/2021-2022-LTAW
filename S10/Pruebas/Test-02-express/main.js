const electron = require('electron');
const colors = require('colors');
const express = require('express');

//-- Usado para saber si electro se está ejecutando
//-- en modo desarrollo o es el programa final
const isDev = require('electron-is-dev');

console.log("Arrancando electron...".yellow);


//-- Configurar el directorio con los ficheros estáticos
//-- para express. El path varía según si estamos en 
//-- desarrollo o en producción

const path = require("path");
const PUBLIC = isDev ? "public" : path.join(__dirname, "../public");

//-- Crear una aplicación web vacia
const app = express();
 
//-- Puerto donde lanzar el servidor
const PORT = 8080;

//-- Definir el punto de entrada principal de mi aplicación web
app.get('/', function (req, res) {
  res.send('Bienvenido a mi aplicación Web!!!');
})
 
//-- Otra vista
app.get('/woala', (req, res) => {
    res.send('WOALA! Chuck Norris approved!! :-)');
    console.log("Acceso a /woala");
});

//-- El directorio publico contiene ficheros estáticos
app.use(express.static(PUBLIC));

//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', ()=>{
  console.log("Evento Ready!")

  // Crear la ventana principal de nuestra Interfaz Gráfica
  const win = new electron.BrowserWindow({
    width: 600,
    height: 400,
    center: true,
    minWidth: 300,
    minHeight: 100,
  });

  win.loadFile('index.html')
  console.log("VAMOS!!!".blue);

});

//-- Lanzar el servidor
app.listen(PORT);
console.log("Servidor Express corriendo en puerto " + PORT);

