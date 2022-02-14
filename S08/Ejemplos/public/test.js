const boton = document.getElementById("boton");
const body = document.getElementsByTagName('body')[0];

boton.onclick = () => {
    if (body.style.backgroundColor=="green") {
        body.style.backgroundColor="lightblue";
    } else {
        body.style.backgroundColor="green";
    }
}
