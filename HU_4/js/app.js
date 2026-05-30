
const formProducto = document.getElementById("formProducto");
const nombreInput = document.getElementById("nombre");

const precioInput = document.getElementById("precio");

const listaProductos = document.getElementById("listaProductos");

const mensaje = document.getElementById("mensaje");

// STATS
const totalProductos = document.getElementById("totalProductos");

const valorTotal = document.getElementById("valorTotal");

const promedio = document.getElementById("promedio");

// ESTADO
let productos = [];

const API_URL = "http://localhost:3000/productos";
const STORAGE_KEY = "productos";


// INICIO
window.addEventListener("load", iniciarApp);

async function iniciarApp() {
    await cargarDesdeAPI();
}

// CREATE
formProducto.addEventListener("submit", agregarProducto);

async function agregarProducto(e) {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const precio = Number(precioInput.value);

    if (!nombre || precio <= 0) {
        mostrarMensaje("Datos inválidos", "red");
        return;
    }

    const producto = { nombre, precio };

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto)
        });

        const data = await res.json();

        productos.push(data);

        guardarLocalStorage();

        renderizarProductos();
        actualizarDashboard();

        mostrarMensaje("Producto creado", "green");

        formProducto.reset();

    } catch (error) {
        console.error(error);
        mostrarMensaje("Error API", "red");
    }
}

// READ
async function cargarDesdeAPI() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        productos = data;

        guardarLocalStorage();

        renderizarProductos();
        actualizarDashboard();

        mostrarMensaje("Datos sincronizados", "blue");

    } catch (error) {
        console.error(error);

        cargarDesdeLocalStorage();
    }
}


// DELETE
async function eliminarProducto(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        productos = productos.filter(p => p.id !== id);

        guardarLocalStorage();

        renderizarProductos();
        actualizarDashboard();

        mostrarMensaje("Producto eliminado", "orange");

    } catch (error) {
        console.error(error);
    }
}

// RENDER
function renderizarProductos() {
    listaProductos.innerHTML = "";

    productos.forEach(p => {
        const li = document.createElement("li");

        li.textContent = `${p.nombre} - $${p.precio} `;

        const btn = document.createElement("button");
        btn.textContent = "Eliminar";

        btn.addEventListener("click", () => eliminarProducto(p.id));

        li.appendChild(btn);
        listaProductos.appendChild(li);
    });
}


// DASHBOARD STATS
function actualizarDashboard() {
    const total = productos.length;

    const suma = productos.reduce((acc, p) => acc + p.precio, 0);

    const prom = total === 0 ? 0 : suma / total;

    totalProductos.textContent = total;
    valorTotal.textContent = "$" + suma;
    promedio.textContent = "$" + prom.toFixed(0);
}


// LOCALSTORAGE
function guardarLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
}

function cargarDesdeLocalStorage() {
    const data = localStorage.getItem(STORAGE_KEY);

    if (data) {
        productos = JSON.parse(data);

        renderizarProductos();
        actualizarDashboard();
    }
}

// MENSAJES
function mostrarMensaje(texto, color) {
    mensaje.textContent = texto;
    mensaje.style.color = color;
}