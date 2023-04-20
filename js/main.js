//Inicializar el array de usuarios en sessionStorage si no existe
if (!localStorage.getItem("usuarios")) {
	localStorage.setItem("usuarios", JSON.stringify([]));
}

//Obtener el formulario de inicio de sesión
var form = document.querySelector("form");

//Agregar un evento de submit al formulario
form.addEventListener("submit", function(event) {
	event.preventDefault();

	//Obtener el correo electrónico y la contraseña ingresados por el usuario
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	//Obtener el array de usuarios de localStorage
	var usuarios = JSON.parse(localStorage.getItem("usuarios"));

	//Buscar el usuario con el correo electrónico ingresado
	var usuarioEncontrado = false;
	var usuario;
	for (var i = 0; i < usuarios.length; i++) {
		if (usuarios[i].email === email) {
			usuarioEncontrado = true;
			usuario = usuarios[i];
			break;
		}
	}

	//Si el usuario no está registrado, mostrar un mensaje de error
	if (!usuarioEncontrado) {
		document.getElementById("message").textContent = "Usuario no registrado. Regístrate para crear una cuenta.";
	}

	//Si la contraseña no coincide, mostrar un mensaje de error
	else if (usuario.password !== password) {
		document.getElementById("message").textContent = "Usuario y/o contraseña incorrectos.";
	}

	//Si el inicio de sesión es exitoso, redirigir al usuario a la página de menú
	else {
		window.location.href = "../pages/menu.html";
	}
});


//REGISTRO

//Inicializar el array de usuarios en localStorage si no existe
if (!localStorage.getItem("usuarios")) {
	localStorage.setItem("usuarios", JSON.stringify([]));
}

//Obtener el formulario de registro
var form = document.querySelector("form");

//Agregar un evento de submit al formulario
form.addEventListener("submit", function(event) {
	event.preventDefault();

	//Obtener los datos ingresados por el usuario
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	//Obtener el array de usuarios de localStorage
	var usuarios = JSON.parse(localStorage.getItem("usuarios"));

	//Buscar si ya existe un usuario con el mismo correo electrónico
	var usuarioExistente = false;
	for (var i = 0; i < usuarios.length; i++) {
		if (usuarios[i].email === email) {
				usuarioExistente = true;
				break;
		}
	}

	// Si el usuario ya existe, mostrar un mensaje de error
	if (usuarioExistente) {
		document.getElementById("message").textContent = "Ya existe un usuario registrado con este correo electrónico.";
	}

	// Si el usuario no existe, agregarlo al array de usuarios y redirigir al usuario a la página de menú
	else {
		var nuevoUsuario = {nombre: nombre, email: email, password: password};
		usuarios.push(nuevoUsuario);
		localStorage.setItem("usuarios", JSON.stringify(usuarios));
		window.location.href = "../pages/menu.html";
	}
});