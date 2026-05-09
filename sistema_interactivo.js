
// Importa el módulo readline de Node.js
const readline = require("readline");

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

// Función para hacer preguntas al usuario
function preguntar(pregunta) {
    return new Promise(resolve => rl.question(pregunta, resolve));
}

async function main() {

    // Solicita el nombre del usuario
    let nombre = await preguntar("Ingrese su nombre: ");

    // Declara la variable edad
    let edad;

    // Ciclo infinito hasta que el usuario ingrese una edad válida
    while (true) {
        
        edad = parseInt(await preguntar("Ingrese su edad: "));

        // Verifica si lo ingresado NO es un número
        if (isNaN(edad)) {
        console.error("Error: por favor, ingresa una edad válida en números.");// Muestra mensaje de error
        } else {
            break;// Si la edad es válida, sale del ciclo
        }
    }

    // Verifica si el usuario es mayor de edad
    if (edad >= 18) {
        console.log("Hola", nombre, "eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");   
    } else {
        console.log("Hola", nombre, "eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");
    }

    rl.close();
}

main();