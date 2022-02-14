//------------------------------------------------
//-- Print JSON
//--
//-- Navegador por un objeto JSON e imprimir en la consola
//-- su estructura
//-------------------------------------------------

//-- Modulo fs para acceder al sistema de ficheros
const fs = require('fs');

//-- Nivel de indentado
const INDENTADO = 4

//-- Imprimir la información de un elmeento de tipo array
//-- indent: Nivel de indentado
function print_array(arr, indent)
{
  
  //-- Obtener una cadena con tantos espacios
  //-- como indique el indentado
  let indent_str = " ".repeat(indent);

  //-- Recorer el erray
  arr.forEach((element, index) => {

    //-- Imprimir espacios de inentado
    process.stdout.write(indent_str);

    //-- Imprimir el índice del array
    process.stdout.write('[' + index + ']: ');

    //-- Imprimir el valor del array
    //-- Es un elemento genérico
    print_element(element, indent);
  });
}

//-- Imprimir un objeto
function print_obj(obj, indent)
{

  //-- Obtener cadena de indentado
  let indent_str = " ".repeat(indent);

  //-- Recorrer todas las propiedades del objeto
  for (let name in obj) {

    //-- Imprimir el indentado
    process.stdout.write(indent_str);

    //-- Imprimir el nombre de la propiedada
    process.stdout.write(name + ': ');

    //-- Imprimir el valor de la propiedad
    //-- Es un elemento genérico
    print_element(obj[name], indent);
  }

}

//-- Imprimir un elemento generico
//-- No se sabe de que tipo es
function print_element(obj, indent) 
{

  //-- Calcular la cadena de indentado
  let indent_str = " ".repeat(indent);

  //-- Según el tipo de elemento se hace
  //-- una cosa u otra
  switch (typeof obj) {

    //-- Elemento simple: Numero
    case 'number':
      console.log("NUMERO: " + obj);
      break;
  
    //-- Elemento simple: cadena
    case 'string':
      console.log("STRING: " + obj);
      break;

    //-- Elemento simple: Booleano
    case 'boolean':
      console.log("Boolean: " + obj);
      break;
  
    //-- Elemento compuesto
    case 'object':

      //-- Se trata de un Array
      if (Array.isArray(obj)) {
        console.log("ARRAY. Tamaño: " + obj.length);

        //-- Imprimir el Array, con un nivel de indentado mayor
        print_array(obj, indent + INDENTADO);
      }

      //-- Es un objeto Nulo
      else if (obj === null) {
        console.log("NULL!");

      //-- Es un objeto  
      } else {
        process.stdout.write("OBJETO. Tamaño: " + Object.keys(obj).length +"\n");

        //-- Imprimir el contenido del objeto, con un nivel de indentado mayor
        print_obj(obj, indent + INDENTADO);
      }
      break;
  
    //-- Aquí no deberia llegar
    default:
      console.log("ERRRO! ESTE MENSAJE NO DEBERIA SALIR!!!")
      break;
  }
}

//-- Fichero JSON por defecto
//-- Si no se especifica fichero se usa este
let fichero="test.json";

//-- Leer fichero de los argumentos (si se ha especificado)
if (process.argv.length > 2) {
  fichero = process.argv[2];
}

//-- Fichero usado
console.log("---------------------------------------------");
console.log(`Fichero: ${fichero}`);

//-- Contenido del fichero
let data;

//-- Abrir el fichero JSON
try {
  data = fs.readFileSync(fichero);
} catch (error) {
  console.log("--> Error al abrir fichero");
  console.log("Usando valor cableado");
  data="3";
}

console.log("---------------------------------------------");

//-- Obtener el elemento
let elemento = JSON.parse(data);

//-- Imprimir el elemento, con indentado inicial 0
print_element(elemento, 0);
console.log("--------------------------------------------\n");
