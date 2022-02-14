//-- Elementos del interfaz
const button = document.getElementById("button");
const display = document.getElementById("display");

//-- Crear un websocket. Se establece la conexión con el servidor
const socket = io();

let contador = 1;

socket.on("connect", () => {
  //-- Enviar mensaje inicial
  socket.send("Mensaje inicial del Cliente!!!");
});  

socket.on("disconnect", ()=> {
  display.innerHTML="¡¡DESCONECTADO!!"
})

socket.on("message", (msg)=>{
  display.innerHTML += '<p style="color:blue">' + msg + '</p>';
});

//-- Al apretar el botón se envía un mensaje al servidor
button.onclick = () => {
  socket.send("Holiii-" + contador);
  contador += 1;
}

let tic = 1;

//-- Enviar un mensaje periódico ("TIC")
setInterval(() => {
    socket.emit('tic', "TIC-" + tic);
    tic += 1;
}, 1000);