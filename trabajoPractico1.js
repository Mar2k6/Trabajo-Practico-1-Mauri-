"use strict";
//Programa definir si un numero es par o impar
//Mostrar "Ingrese un numero para saber si es par o impar"
//leer numero
//definir si es par o impar o zero
//mostrar resultado
//fin programa
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero = rls.questionInt("Ingrese un numero para saber si es par o impar: ");
if (numero == 0) {
    console.log("El numero " + numero + " es 0");
}
else if (numero % 2 == 0) {
    console.log(" El numero " + numero + " es par ");
}
else {
    console.log(" El numero " + numero + " es impar ");
}
