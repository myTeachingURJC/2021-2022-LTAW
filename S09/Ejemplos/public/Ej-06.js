//-- Elementos del interfaz
const button = document.getElementById("button");
const display = document.getElementById("display");

//-- Crear el Websocket
const websocket = new WebSocket("ws://localhost:8080");

let contador = 1;

//-- Enviar mensaje inicial al establecerse la conexión
websocket.onopen = () => {
    console.log("Conexión establecida!")

    //-- Enviar mensaje inicial
    websocket.send("Mensaje inicial del Cliente!!!");
}

websocket.onclose = () => {
    console.log("Conexión cerrada!");
}

//-- Mensaje recibido!
websocket.onmessage = (e) => {
  display.innerHTML += '<p style="color: blue">' + e.data + '</p>';
}

//-- Al apretar el botón se envía un mensaje al servidor
button.onclick = () => {
  websocket.send("Holiii-" + contador);
  contador += 1;
}
