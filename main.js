//La idea con este proyecto que recien empieza, es realizar el sitio web de una casa de comida que vende ensaladas
//El programa va a pedir los ingredientes deseados para la ensalada. Proximamente voy a sumar listado de opciones y diseño HTML y CSS mas bonito

let ingrediente = [];
let nuevoIngrediente = prompt("Ingrese un ingrediente para su ensalada");

//Este while nos permite seguir llenando la variable "ingrediente" de ingredientes
while (nuevoIngrediente) {
  ingrediente.push(nuevoIngrediente);
  nuevoIngrediente = prompt("Ingrese otro ingrediente para su ensalada o presione Cancelar para terminar:");
}

//Si la lista de ingredientes no está vacía, los imprimimos por pantalla
if (ingrediente.length > 0) {
  console.log("Ingredientes guardados:");
  for (let i = 0; i < ingrediente.length; i++) {
    console.log(`${i + 1}. ${ingrediente[i]}`);
  }
} else {
  console.log("No se han guardado ingredientes");
}