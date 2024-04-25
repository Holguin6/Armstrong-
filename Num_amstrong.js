function calcularPotencia(numero, exponente) {
    return Math.pow(numero, exponente);
}

function esNumeroArmstrong(numero) {
    let numeroStr = numero.toString();
    let longitud = numeroStr.length;
    let sumaPotencias = 0;

    for (let i = 0; i < longitud; i++) {
        let digito = parseInt(numeroStr.charAt(i));
        sumaPotencias += calcularPotencia(digito, longitud);
    }

    return sumaPotencias === numero;
}

function imprimirResultado(numero, esArmstrong) {
    if (esArmstrong) {
        console.log(numero + " es un número de Armstrong.");
    } else {
        console.log(numero + " no es un número de Armstrong.");
    }
}

let numero1 = 371;
let numero2 = 9474;
let numero3 = 123;

imprimirResultado(numero1, esNumeroArmstrong(numero1));
imprimirResultado(numero2, esNumeroArmstrong(numero2));
imprimirResultado(numero3, esNumeroArmstrong(numero3));
