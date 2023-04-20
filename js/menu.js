let base = prompt("Seleccione una base para su ensalada:\n1. Lechuga\n2. Lechuga y rúcula\n3. Sin base");
let ingredientes = prompt("Seleccione los ingredientes para su ensalada, separados por comas (,):\nHuevo, Tomate, Crutones, Cebolla, Pepinos, Arvejas, Fideos, Arroz");
let proteina = prompt("Seleccione una proteína para su ensalada:\n1. Atún\n2. Pollo\n3. Pescado\n4. Tofu\n5. Sin proteína");
let salsa = prompt("Seleccione una salsa para su ensalada:\n1. Salsa César\n2. Vinagre\n3. Aceite\n4. Sin salsa");

let baseSeleccionada;
let ingredientesSeleccionados = [];
let proteinaSeleccionada;
let salsaSeleccionada;

switch (base) {
  case "1":
    baseSeleccionada = "Lechuga";
    break;
  case "2":
    baseSeleccionada = "Lechuga y rúcula";
    break;
  case "3":
    baseSeleccionada = "Sin base";
    break;
  default:
    alert("Base seleccionada no válida");
}

if (ingredientes) {
  ingredientesSeleccionados = ingredientes.split(",");
}

switch (proteina) {
  case "1":
    proteinaSeleccionada = "Atún";
    break;
  case "2":
    proteinaSeleccionada = "Pollo";
    break;
  case "3":
    proteinaSeleccionada = "Pescado";
    break;
  case "4":
    proteinaSeleccionada = "Tofu";
    break;
  case "5":
    proteinaSeleccionada = "Sin proteína";
    break;
  default:
    alert("Proteína seleccionada no válida");
}

switch (salsa) {
  case "1":
    salsaSeleccionada = "Salsa César";
    break;
  case "2":
    salsaSeleccionada = "Vinagre";
    break;
  case "3":
    salsaSeleccionada = "Aceite";
    break;
  case "4":
    salsaSeleccionada = "Sin salsa";
    break;
  default:
    alert("Salsa seleccionada no válida");
}

alert("Ha seleccionado la siguiente ensalada:\n\nBase: " + baseSeleccionada + "\nIngredientes: " + ingredientesSeleccionados.join(", ") + "\nProteína: " + proteinaSeleccionada + "\nSalsa: " + salsaSeleccionada);