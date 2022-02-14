console.log("Ejecutando Javascript...");

//-- Elementos HTML para mostrar informacion
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");

//-- Botones
const boton_test = document.getElementById("boton_test");
const boton_ajax = document.getElementById("boton_ajax");

//-- Retrollamada del boton de Test-JS
boton_test.onclick = ()=> {
    display1.innerHTML+="<p>Hola desde JS!</p>";
}

//-- Retrollamda del boton de Ver productos
boton_ajax.onclick = () => {
    
    display2.innerHTML+="<p>Haciendo petición...</p>\n";

    //-- Crear objeto para hacer peticiones AJAX
    const m = new XMLHttpRequest();

    //-- Función de callback que se invoca cuando
    //-- hay cambios de estado en la petición
    m.onreadystatechange = () => {

        //-- Petición enviada y recibida. Todo OK!
        if (m.readyState==4) {

            console.log("Peticion completada");
            console.log("status: " + m.status);

            //-- Solo la procesamos si la respuesta es correcta
            if (m.status==200) {

                //-- La respuesta es un objeto JSON
                let productos = JSON.parse(m.responseText)

                //-- Meter el resultado en un párrafo html
                display2.innerHTML += "<p>";

                //--Recorrer los productos del objeto JSON
                for (let i=0; i < productos.length; i++) {

                    //-- Añadir cada producto al párrafo de visualización
                    display2.innerHTML += productos[i];

                    //-- Separamos los productos por ',''
                    if (i < productos.length-1) {
                    display2.innerHTML += ', ';
                    }
                }

                //-- Cerrar el párrafo
                display2.innerHTML += "</p>"

            } else {
                //-- Hay un error en la petición
                //-- Lo notificamos en la consola y en la propia web
                console.log("Error en la petición: " + m.status + " " + m.statusText);
                display2.innerHTML += '<p>ERROR</p>'
            }
        }
    }

    //-- Configurar la petición
    m.open("GET","/productos", true);

    //-- Enviar la petición!
    m.send();
}

