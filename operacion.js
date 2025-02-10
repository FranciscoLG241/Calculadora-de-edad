alert("Calculadora de edad");

let Nacimiento = prompt("Ingresa tu año de nacimiento:");
let Actual = prompt("Ingresa el año actual:");

if (Nacimiento && Actual) {
    let edad = Actual - Nacimiento;
    alert("Tu edad es: " + edad);
} else {
    alert("Por favor, ingresa valores válidos.");
}