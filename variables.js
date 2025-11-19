// Declaración de variables (var, let, const)
console.log("--- Variables (var, let, const) ---");

// 'var': Es la forma antigua de declarar variables. 
// Tiene ámbito de función (function scope) y puede ser redeclarada y actualizada.
// Generalmente se evita en código moderno.
var variableVar = "Soy 'var' (antigua)";
variableVar = "He sido actualizada";
console.log(variableVar);

// 'let': Es la forma moderna de declarar variables que PUEDEN cambiar su valor.
// Tiene ámbito de bloque (block scope - { ... }). No puede ser redeclarada en el mismo ámbito.
let variableLet = "Soy 'let' (moderna)";
variableLet = "Puedo ser actualizada";
console.log(variableLet);

// 'const': Es la forma moderna de declarar variables que NO PUEDEN cambiar su valor (constantes).
// También tiene ámbito de bloque. Debe ser inicializada al declararse.
const variableConst = "Soy 'const' (inmutable)";
// variableConst = "Intentar esto dará error"; // Descomentar esto causará un error
console.log(variableConst);

/*
 * 
 * Un diagrama visual de la diferencia de "scope" (ámbito) 
 * entre var (ámbito de función) y let/const (ámbito de bloque).
 */

// Tipos de Datos Primitivos
console.log("--- Tipos de Datos ---");

let miString = "Hola, esto es texto";   // String
let miNumero = 42;                      // Number
let miBooleano = true;                  // Boolean (true o false)
let miNull = null;                      // Null (valor nulo intencional)
let miUndefined;                        // Undefined (valor no asignado)

console.log("String:", miString);
console.log("Numero:", miNumero);
console.log("Booleano:", miBooleano);
console.log("Nulo:", miNull);

console.log("Indefinido:", miUndefined);
