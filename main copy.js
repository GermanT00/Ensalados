//EJEMPLO DE USO COMBINADO DE OPERADOR AND Y OR
/* En Argentina existe un rango de edad para poder votar 
este script evalúa dichas condiciones.
*/
/* let edadObligatoria = 18;
let edadOptativa = 16;
let edadLimite = 69;
let edadUsuario = parseInt(prompt("Ingresá tu edad"));
  if (edadUsuario >= edadObligatoria && edadUsuario <= edadLimite) {
    alert("Estás obligado/a a Votar");
  } else if (edadUsuario >= edadOptativa || edadUsuario > edadLimite) {
    alert("Podés votar, si querés");
  } else {
    alert("No podés votar todavía");
  }
 */
/* let nombre2=prompt("ingresa nombre");
  let pass=prompt("ingresa contraseña");
  
  if(nombre2 !=""){
      if(pass==IVA){
          console.log("bienvenido");
      }else{
          console.log("verificar contraseña");
      }
  }else{
      console.log("campos requeridos")
  }
  let nombre = prompt("Digite tu nombre de usuario");
  let KEYPASS = "123";
  
   if (nombre != "")  {
  let pass = prompt("Digite la contrasena");
  if (pass != ""){
        if (pass == KEYPASS) {
       console.log("Bienvenido " + nombre);
   }else{
     console.log("User o pass incorrecto");
   }}else{
     console.log("campos requeridos");
   }
  }else{
    console.log("campos requeridos");
  } */

//FOR
//i++ i= i + 1
/* for (let i = 0; i < 3; i++) {
  alert("Hola tarola");
}
 */

/* for (let i = 0; i <= 3; i++) {
  alert("Ya llegamos a la India?");
  alert("no");
}
alert("A ver? Ya!"); */

/* alert("Podeis hacerme 3 preguntas");
alert("Que bueno porque solo necesito una");
for (let i = 1; i <= 3; i++) {
  let pregunta = prompt("");
  if (pregunta != "usted?") {
    let respuesta = "Si";
    alert(respuesta);
  } else {
    respuesta = "Asi es... espero que los haya iluminado... ";
    alert(respuesta);
  }
}
alert("Gracias vuelva prontos"); */
/* let limit = prompt("ingresa el numero imite ");
let ingreso = parseInt(prompt("Ingresa un numero"));
for (let i = 0; i <= limit; i++) {
  let resultado = ingreso * i;
  console.log(ingreso + " * " + i + " = " + resultado);
} */

//BREAk

/* let palabraClave = "firulais";
for (let i = 1; i <= 3; i++) {
  let ingreso = prompt("Ingresa la palabra clave");
  if (ingreso == palabraClave) {
    alert("Adivinaste");
   break;
  }
} */
//continue
/* for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) {
    console.log("impar");
    continue;
  }
  console.log(i);
} */

let condicion = true;

//while
/* while(condicion){
  //bloque de ejecucion
  alert("ja")
  //condicion de salida
} */
let passGuardado = "manteca";

/* let passUser = prompt("Ingresa la palabra clave");
while (passUser != passGuardado) {
  alert("palabra incorrecta");
  passUser = prompt("Ingresa la palabra clave (estoy dentro del while)");
} */

/* let ingreso2 = prompt("Ingresa un producto ingres 'esc' para terminar");
while (ingreso2 != "esc") {
  alert("Su producto es: " + ingreso2);
  ingreso2 = prompt("Ingresa un producto ingres esc para terminar");
} */
/* let passUsuario = prompt("Ingresa tu contraseña");
let continuar = true;
while (continuar) {
  if (passGuardado === passUsuario) {
    alert("Bienvenido/a");
    continuar = false;
    break;
  }
  alert("Contraseña incorrecta");
  passUsuario = prompt("Ingresá tu contraseña");
} */

//do while
let continuar = true;
let condition = true;
/* 
do {
  alert("me ejecuto aunque sea una vez");
} while (condition); */

/* do {
  let passUsuario = prompt("Ingresa tu contraseña");
  if (passGuardado == passUsuario) {
    alert("Bienvenido/a");
    continuar = false;
    break;
  }
} while (condition); */