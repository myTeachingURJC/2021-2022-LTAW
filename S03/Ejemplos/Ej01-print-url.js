//-- EJEMPLO 1. MODULO URL
//-- Accediendo a los distintos campos del objeto URL
//-- Los campos se imprimen en la consola


//-- Construir un objeto URL
const myURL = new URL('http://localhost:8080/mi_tienda/listados.html?articulo=pendrive&color=blanco#descripcion');


//-- Imprimir la información de la URL
console.log("  * URL completa (href): " + myURL.href)
console.log("  * Origen: " + myURL.origin);
console.log("    * Protocolo: " + myURL.protocol);
console.log("    * host: " + myURL.hostname);
console.log("    * port: " + myURL.port);
console.log("  * Ruta: " + myURL.pathname);
console.log("  * Busqueda: " + myURL.search);

//-- Recorrer todas las búsquedas
myURL.searchParams.forEach((value, name)=>{
  console.log("      * Parametro: " + name + " = " + value);
});

//-- Imprimir directamente los valores de los parametros
console.log("    * Artículo: " + myURL.searchParams.get('articulo'));
console.log("    * Color: " + myURL.searchParams.get('color'));
console.log("    * Otro: " + myURL.searchParams.get('otro'));

//-- Ultima parte: Fragmento
console.log("  * Fragmento: " + myURL.hash);

