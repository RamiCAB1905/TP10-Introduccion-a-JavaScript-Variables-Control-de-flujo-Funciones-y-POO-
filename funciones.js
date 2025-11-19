// Función para calcular el área de un círculo
console.log("--- Función (Área Círculo) ---");
function calcularAreaCirculo(radio) {
    // Fórmula: Área = PI * radio^2
    return Math.PI * Math.pow(radio, 2);
}

let radio = 5;
let area = calcularAreaCirculo(radio);
console.log("El área de un círculo con radio " + radio + " es: " + area);

// Función para sumar un array
console.log("--- Función (Sumar Array) ---");
function sumarArray(arrayDeNumeros) {
    let sumaTotal = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        sumaTotal = sumaTotal + arrayDeNumeros[i]; // También: sumaTotal += arrayDeNumeros[i]
    }
    return sumaTotal;
}

let numeros = [10, 20, 30, 40];
let total = sumarArray(numeros);
console.log("La suma del array [10, 20, 30, 40] es: " + total);

