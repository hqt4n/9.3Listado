/*document.addEventListener("DOMContentLoaded", function(){
    const textoEntrada = document.getElementById("item")
    const submitBtn = document.getElementById("agregar")
    const contenedor = document.getElementById("contenedor")


if(localStorage.getItem("miTexto")){
    contenedor.contenedor = localStorage.getItem("miTexto")
}

submitBtn.addEventListener("click", function(){
    const texto = textoEntrada.value;
    localStorage.setItem("miTexto", texto);
    contenido.contenedor = texto;
    textoEntrada.value = "";
})
})*/

const inputItem = document.getElementById('item');
const botonAgregar = document.getElementById('agregar');
const botonLimpiar = document.getElementById('limpiar');
const contenedor = document.getElementById('contenedor');

// Cargar los elementos guardados al cargar la página
const elementosGuardados = JSON.parse(localStorage.getItem('items')) || [];
cargarElementos(elementosGuardados);

// Función para cargar elementos en el listado
function cargarElementos(elementos) {
  contenedor.innerHTML = '';
  elementos.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item;
    contenedor.appendChild(li);
  });
}

// Agregar elemento al listado y guardar en localStorage
botonAgregar.addEventListener('click', () => {
  const nuevoItem = inputItem.value.trim();
  if (nuevoItem !== '') {
    elementosGuardados.push(nuevoItem);
    localStorage.setItem('items', JSON.stringify(elementosGuardados));
    cargarElementos(elementosGuardados);
    inputItem.value = '';
  }
});

// Limpiar el listado y localStorage
botonLimpiar.addEventListener('click', () => {
  elementosGuardados.length = 0;
  localStorage.removeItem('items');
  cargarElementos(elementosGuardados);
});

