 // Al cargar la página
 window.onload = function() {
	// Si hay un usuario en el local storage, mostrar su nombre y ocultar el formulario de inicio de sesión
	if(localStorage.getItem("user")) {
		let user = JSON.parse(localStorage.getItem("user"));
		window.location.href = "../pages/menu.html";
	}

	// Al hacer click en el botón de registrarse, mostrar el formulario de registro
	document.getElementById("register-button").addEventListener("click", function(event) {
		event.preventDefault();
		document.getElementById("register-form").style.display = "block";
	});

	// Al hacer submit en el formulario de registro, guardar el usuario en el local storage y mostrar el nombre
	document.getElementById("register-form").addEventListener("submit", function(event) {
		event.preventDefault();
		let newUser = {
			username: document.getElementById("new-username").value,
			password: document.getElementById("new-password").value
		};
		localStorage.setItem("user", JSON.stringify(newUser));
		window.location.href = "../pages/menu.html";
	});

	// Al hacer submit en el formulario de inicio de sesión, buscar el usuario en el local storage y mostrar su nombre
	document.getElementById("login-form").addEventListener("submit", function(event) {
		event.preventDefault();
		let username = document.getElementById("username").value;
		let password = document.getElementById("password").value;
		let user = JSON.parse(localStorage.getItem("user"));
		if(user && user.username === username && user.password === password) {
			window.location.href = "../pages/menu.html";
		} else {
			alert("Nombre de usuario o contraseña incorrectos.");
		}
	});
}


const btnSalir = document.getElementById('btn-salir');
btnSalir.addEventListener('click', function() {
  // Borramos todos los datos del local storage
  localStorage.clear();
  // Redirigimos a la página index.html
  window.location.href = "./index.html";
});