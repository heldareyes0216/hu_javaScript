
// selección de elementos 
const inputNota = document.getElementById("inputNota");

const btnAgregar = document.querySelector("#btnAgregar");

const listaNotas = document.getElementById("listaNotas");

// verifivamos números en consola 
console.log(inputNota);
console.log(btnAgregar);
console.log(listaNotas);

// array de notas 
let notas = [];

// cargar notas del local storage
const notasGuardadas = localStorage.getItem("notas");

if (notasGuardadas) {

    notas = JSON.parse(notasGuardadas);
    console.log(`Se cargaron ${notas.length} notas`);

    notas.forEach((nota) => {
        crearNotaEnDOM(nota);
    });
}

// botón agregar 
btnAgregar.addEventListener("click", () => {

    // obtener el texto
    const textoNota = inputNota.value.trim();

    // validar vacío
    if (textoNota === "") {

        alert("Por favor escribe una nota");
        return;
    }

    // agregar al array
    notas.push(textoNota);

    // guardar en localstorage
    guardarNotas();

    // crear en el DOM
    crearNotaEnDOM(textoNota);

    console.log("Nota agregada:", textoNota);

    // limpiar input
    inputNota.value = "";

    // focus
    inputNota.focus();

});

// crear nota 
function crearNotaEnDOM(texto) {

    const li = document.createElement("li");

    li.textContent = texto;

    const btnEliminar = document.createElement("button");

    btnEliminar.textContent = "Eliminar";

    // agregar boton al li
    li.appendChild(btnEliminar);

    // agregar li al ul
    listaNotas.appendChild(li);

// eliminar 
btnEliminar.addEventListener("click", () => {
    
    listaNotas.removeChild(li);

    notas = notas.filter((nota) => nota !== texto);

    guardarNotas();

    console.log("Nota eliminada:", texto);
});

}

// guardamos en localstorage
function guardarNotas() {

    localStorage.setItem("notas", JSON.stringify(notas));

    console.log("Notas guardadas en Local Storage");
}



