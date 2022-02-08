//-- Ejemplo de definicion de funciones

//-- Se definen 4 funciones sin parámetros
//-- de diferentes formar

//-- Definición clásica
function mi_funcion1() {
    console.log("Mi funcion 1!!");
}

//-- Se define una función y se asigna a una variable
const mi_funcion2 = function() {
    console.log("Mi funcion2....");
}

//-- Otra forma de hacer lo anterior, pero con una
//-- notación abreviada
const mi_funcion3 = () => {
    console.log("Mi funcion3....")
}

//-- Definición de funciones dentro de un 
//-- objeto literal
const a = {
    x : 10,
    f4 : function() {
        console.log("Mi funcion4!!!");
    },
    f5: () => {
        console.log("Mi funcion 5!!!");
    }
}

//-- Llamando a las funciones
mi_funcion1()
mi_funcion2()
mi_funcion3()
a.f4()
a.f5()
