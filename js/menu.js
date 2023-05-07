function actualizarEnsalada() {
  // Obtener los valores de los inputs
  const lechuga = Number(document.getElementById('lechuga').value);
  const arroz = Number(document.getElementById('arroz').value);
  const porotos = Number(document.getElementById('porotos').value);

  // Calcular el peso y el precio de cada ingrediente
  const pesoLechuga = lechuga * 50;
  const precioLechuga = pesoLechuga * 2.2;

  const pesoArroz = arroz * 50;
  const precioArroz = pesoArroz * 2.2;

  const pesoPorotos = porotos * 50;
  const precioPorotos = pesoPorotos * 2.2;

  // Calcular el peso total y el precio de la ensalada completa
  const pesoTotal = pesoLechuga + pesoArroz + pesoPorotos;
  const precioTotal = pesoTotal * 2.2;

  // Actualizar el HTML con los valores calculados
  document.getElementById('lechuga').textContent = pesoLechuga + ' gramos';
  document.getElementById('arroz').textContent = pesoArroz + ' gramos';
  document.getElementById('porotos').textContent = pesoPorotos + ' gramos';

  document.getElementById('peso-total').textContent = pesoTotal + ' gramos';
  document.getElementById('precio-total').textContent = '$' + precioTotal.toFixed(2);
}

const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach(input => {
  input.addEventListener('change', actualizarEnsalada);
});

const btnSalir = document.getElementById('btn-salir');
btnSalir.addEventListener('click', function() {
  // Borramos todos los datos del local storage
  localStorage.clear();
  // Redirigimos a la página index.html
  window.location.href = "../index.html";
});

// Array donde se guardarán las ensaladas
let ensaladas = [];

// Función para guardar la ensalada en el array y limpiar los campos
function guardarEnsalada() {
  const lechuga = Number(document.getElementById('lechuga').value);
  const arroz = Number(document.getElementById('arroz').value);
  const porotos = Number(document.getElementById('porotos').value);
  
  ensaladas.push({ lechuga, arroz, porotos });

  // Limpiar los campos
  document.getElementById('lechuga').value = '';
  document.getElementById('arroz').value = '';
  document.getElementById('porotos').value = '';
  document.getElementById('peso-total').value = '';
  document.getElementById('precio-total').value = '';

  localStorage.setItem('ensaladas', JSON.stringify(ensaladas));
}

function mostrarEnsaladas() {
  const ensaladasGuardadas = JSON.parse(localStorage.getItem('ensaladas')) || [];
  let listaEnsaladas = '';
  
  if (ensaladasGuardadas.length > 0) {
    ensaladasGuardadas.forEach((ensalada, index) => {
      const numeroEnsalada = index + 1;
      listaEnsaladas += `<li>Ensalada ${numeroEnsalada}: ${ensalada.lechuga} gramos de lechuga, ${ensalada.arroz} gramos de arroz, ${ensalada.porotos} gramos de porotos</li>`;
    });
  } else {
    listaEnsaladas = '<li>No hay ensaladas guardadas</li>';
  }
  
  document.getElementById('lista-ensaladas').innerHTML = listaEnsaladas;
}


// Evento para el botón "Guardar ensalada"
document.getElementById('guardar').addEventListener('click', guardarEnsalada);
document.getElementById('ver-ensaladas').addEventListener('click', mostrarEnsaladas);

