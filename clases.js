// -----------------------------------------------------------------
// Clases y Programación Orientada a Objetos (POO)
// -----------------------------------------------------------------

// Definición de una Clase
console.log("--- Clases y POO ---");
// Una clase es un "molde" o "plantilla" para crear objetos.
class Persona {
    
    // El 'constructor' se llama automáticamente al crear un nuevo objeto (instancia)
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // 'saludar' es un método (una función) de la clase
    saludar() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
}

/*
 * 

 * Un diagrama que muestra cómo una 'Clase' (Molde/Blueprint) 
 * se utiliza para crear 'Instancias' (Objetos).
 */

// Crear una instancia y ejecutar el método
// Creamos un nuevo objeto (instancia) usando el "molde" (clase) Persona
let persona1 = new Persona("Carlos Gomez", 45);

// Ejecutamos el método 'saludar' de esa instancia específica
persona1.saludar();

let persona2 = new Persona("Lucia Fernandez", 22);

persona2.saludar();
