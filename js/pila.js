"use strict";
var elementos = [];
var opciones = 0;
do {
    opciones = Number(prompt("\n" +
        "\n 1.- Crear la pila" +
        "\n 2.- Ingresar elemento(PUSH)" +
        "\n 3.- Sacar elemento (POP)" +
        "\n 4.- Método miron (PEEK)" +
        "\n 5.- Imprimir toda la pila" +
        "\n 6.- Salir \n"));
    switch (opciones) {
        case 1: //Crear
            console.log("ey has creado la pila");
            break;
        case 2: //PUSH
            var nuevo = prompt("Ingrese un elemento a la pila");
            this.elementos.push(nuevo);
            break;
        case 3: //POP
            var retirar = prompt("has eliminado un elemento");
            this.elementos.peek(retirar);
            break;
        case 4: //PEEK
            var cima = prompt("elemento en la cima");
            this.elementos.peek(cima);
            break;
        case 5: //Imprimir
            var imprimir = prompt("imprimiendo elemento");
            console.log(elementos);
            break;
        case 6:
            var b = prompt("seguro que quieres salir ..?? SI o NO \n" + "\n 1. Si" + "\n 2. NO");
            this.elementos.push(b);
            break;
    }
} while (opciones != 6);
console.log("Gracias por usar el programa");
