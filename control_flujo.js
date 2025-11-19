// Par o Impar (if/else)
console.log("--- Par o Impar ---");
let numero = 11; // Podes cambiar el número para probar las otras respuestas

if (numero % 2 === 0) {
    console.log(numero + " es PAR");
} else {
    console.log(numero + " es IMPAR");
}

// Clasificación de Edad (if / else if / else)
console.log("--- Clasificación de Edad ---");
let edad = 15; // Podes cambiar la edad para probar las otras respuestas, no esta ligado al anterior es aparte

if (edad >= 0 && edad <= 11) {
    console.log("Resultado: Niño");
} else if (edad >= 12 && edad <= 17) {
    console.log("Resultado: Adolescente");
} else if (edad >= 18) {
    console.log("Resultado: Adulto");
} else {
    console.log("Edad no válida");

}

