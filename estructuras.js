// -----------------------------------------------------------------
// Parte D — Estructuras de Datos
// -----------------------------------------------------------------

// 8. Arrays (Listas)
console.log("--- Arrays (Recorrido) ---");
let lenguajes = ["JavaScript", "Python", "Java", "C#", "PHP"];

console.log("Lista de lenguajes (usando forEach):");
// 'forEach' es una forma moderna y limpia de recorrer arrays
lenguajes.forEach(function(lenguaje, indice) {
    console.log(indice + ": " + lenguaje);
});

// Alternativa con bucle 'for' clásico
// console.log("Lista de lenguajes (usando for):");
// for (let i = 0; i < lenguajes.length; i++) {
//     console.log(i + ": " + lenguajes[i]);
// }

// 9. Objeto Literal
console.log("--- Objeto Literal ---");
// Un objeto agrupa datos relacionados (propiedades) en una sola variable.
let usuario = {
    nombre: "Ana Rodriguez",
    edad: 28,
    email: "ana.rodriguez@example.com"
};

// Accedemos a las propiedades usando la notación de punto
console.log("Nombre del usuario: " + usuario.nombre);
console.log("Email del usuario: " + usuario.email);
