//-- Ejemplo de paso de parametros a funciones

//-- Recibe dos parámetros y devuelve su suma
function suma(x,y) {
  //-- devolver la suma
  return x+y;
}

//-- Recibe un parámetro y lo imprime por la consola
function mensaje(msg) {
  console.log(msg);
}

//-- Funcion que no recibe parametros
function saluda() {
    mensaje("HOLA!!");
}

//-- Funcion que recibe una funcion como parametro
//-- y simplemente la llama 
function call(func) {
  console.log("--> Funcion recibida");

  //-- Llamar a la funcion pasada como argumento
  func();
}

//-- Llamar a suma
let a = suma(2,3);

//-- Probando la funcion mensaje
mensaje("Prueba")
mensaje(a);

//-- Probando la funcion call
call(saluda);

//-- Se le pasa como parametro una funcion
//-- que se define dentro de los parametros, vez de 
//-- fuera
call( () => {
  mensaje("HOLI!!")
});

