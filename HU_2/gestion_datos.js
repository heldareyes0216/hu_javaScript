// lista de productos
const productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 2500000
    },

    {
        id: 2,
        nombre: "Mouse",
        precio: 20000
    },

    {
        id: 3,
        nombre: "Teclado",
        precio: 70000
    }

];

// función para validar productos
function validarProducto(producto) {

    //validamos el ID
    if (typeof producto.id !== "number" || producto.id <= 0) {
        return false;
    }

    // validamos el nombre 
    if (typeof producto.nombre !== "string" || producto.nombre.trim() === "") {
        return false;
    }

    // validamos el precio 
    if (typeof producto.precio !== "number" || producto.precio <= 0) {
        return false;
    }

    return false;
}

// validamos y probamos los productos
console.log("==== validación de productos ====");

productos.forEach(producto => {
    if (validarProducto(producto)) {
        console.log(`Producto válido: ${producto.nombre}`);
    } else {
        console.log("Producto inválido")
    }
});

const numeros = new Set([1, 2, 2, 3, 4, 4, 5, 5]);

console.log("\n==== set original ====");
console.log(numeros);

// agregamos un número nuevo
numeros.add(10);

console.log("\nNúmero agregado al Set.");

// verificamos si el número existe
console.log("\n¿Existe el número 3?");
console.log(numeros.has(3));

// eliminamos un número
numeros.delete(2);

console.log("\nNúmero 2 eliminado del Set.");

// recorremos el Set con for...of
console.log("\n==== recorrido del Set ====");

for (const numero of numeros) {
    console.log(numero);
}

// creación Map de categorías y productos 
const categorias = new Map();

categorias.set("Tecnología", "Laptop");
categorias.set("Accesorios", "Mouse");
categorias.set("Periféricos", "Teclado");

// iteracción de estructuras

// recorremos objetos con for...in
console.log("\n==== recorrido de objetos ====");

for (const producto of productos) {
    console.log("\nProducto: ");

    for (const propiedad in producto) {
        console.log(`${propiedad}: ${producto[propiedad]}`);
    }
}

// recorremos Map con ForEach
console.log("\n==== recorrido del Map ====");

categorias.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} -> Producto: ${valor}`);
});

// uso de métodos de obejtos 
console.log("\n==== objetos.keys ====");
console.log(Object.keys(productos[0]));

console.log("\n==== objetos.values ====");
console.log(Object.values(productos[0]));

console.log("\n==== objetos.entries ====");
console.log(Object.entries(productos[0]));

// resultados finales 
console.log("\n===== lista de productos =====");
console.log(productos);

console.log("\n===== productos únicos (Set) =====");
console.log(numeros);

console.log("\n===== categorías y prodcutos (Map) =====");
console.log(categorias);


