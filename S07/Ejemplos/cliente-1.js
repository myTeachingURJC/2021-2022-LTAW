console.log("Ejecutando Javascript...");

const display = document.getElementById("display");
const boton_test = document.getElementById("boton_test");

boton_test.onclick = ()=> {
    display.innerHTML+="<p>Hola desde JS!</p>";
}
