const electron = require('electron');

console.log("Arrancando electron...");

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
});

