// ejercicio 1
let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);
console.log("IMC:", imc.toFixed(2));
let clasificacion = "";

if (imc < 18.5) {
    clasificacion = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    clasificacion = "Normal";
} else if (imc >= 25 && imc <= 29.9) {
    clasificacion = "Sobrepeso";
} else {
    clasificacion = "Obesidad";
}

console.log("Clasificación:", clasificacion);

// ejercicio 2
function encontrarPrimos(limite) {
    let primos = [];
    for (let i = 2; i <= limite; i++) {
        let esPrimo = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            primos.push(i);
        }
    }

    console.log(primos.join(", "));
}

encontrarPrimos(20);

// ejercicio 3 
function dibujarTriangulo(n) {
    for (let i = 1; i <= n; i++) {
        let linea = "";

        for (let j = 1; j <= i; j++) {
            linea += "*";
        }

        console.log(linea);
    }
}

dibujarTriangulo(5);

//ejercicio 4
function calculadora(num1, num2, operacion) {

    switch (operacion) {

        case "sumar":
            return num1 + num2;

        case "restar":
            return num1 - num2;

        case "multiplicar":
            return num1 * num2;

        case "dividir":
            if (num2 === 0) {
                return "Error: División por cero";
            }
            return num1 / num2;

        default:
            return "Operación no válida";
    }
}

console.log(calculadora(10, 5, "sumar"));
console.log(calculadora(10, 5, "dividir"));
console.log(calculadora(10, 0, "dividir"));


// ejercicio 5
function validarPassword(password) {
    let errores = [];

    if (password.length < 8) {
        errores.push("Debe tener al menos 8 caracteres");
    }

    if (!/[A-Z]/.test(password)) {
        errores.push("Debe contener una letra mayúscula");
    }

    if (!/[0-9]/.test(password)) {
        errores.push("Debe contener un número");
    }

    if (!/[!@#$%^&*]/.test(password)) {
        errores.push("Debe contener un carácter especial");
    }

    return {
        valida: errores.length === 0,
        errores
    };
}

console.log(validarPassword("Abc123!"));  
console.log(validarPassword("debil"));

// ejercicio 6
for (let i = 1; i <= 100; i++) {
    let salida = "";

    if (i % 3 === 0) salida += "Fizz";
    if (i % 5 === 0) salida += "Buzz";

    console.log(salida || i);
}

// ejercicio 7
function esPalindromo(texto) {
    let limpio = texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

    let invertido = limpio.split("").reverse().join("");

    return limpio === invertido;
}

console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá"));
console.log(esPalindromo("Hola mundo"));

// ejercicio 8
function fibonacci(n) {
    const secuencia = [0, 1];

    for (let i = 2; i < n; i++) {
        secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }

    return secuencia.slice(0, n);
}

console.log(fibonacci(10));

// ejercicio 9
function analizarTexto(texto) {
    const palabras = texto.toLowerCase().match(/\b[\wáéíóúüñ]+\b/g) || [];

    const numPalabras = palabras.length;

    const caracteres = texto.replace(/\s+/g, "").length;

    let palabraMasLarga = "";
    palabras.forEach(p => {
        if (p.length > palabraMasLarga.length) {
            palabraMasLarga = p;
        }
    });

    const vocales = (texto.match(/[aeiouáéíóúü]/gi) || []).length;

    const frecuencia = {};
    palabras.forEach(p => {
        frecuencia[p] = (frecuencia[p] || 0) + 1;
    });

    return {
        palabras: numPalabras,
        caracteres,
        palabraMasLarga,
        vocales,
        frecuencia
    };
}

let resultado = analizarTexto("Hola mundo, mundo hermoso");
console.log(resultado);
