"use strict";
var NodoPila = /** @class */ (function () {
    function NodoPila() {
    }
    NodoPila.crearPila = function () {
        console.log("programmdor has creado una pila");
        return elementos;
    };
    NodoPila.imprimirPila = function () {
        if (elementos == null)
            console.log("Hey inicializala pila primero");
        else
            console.log("Elementos:" + elementos.toString());
    };
    NodoPila.pushPila = function () {
        if (elementos == null)
            console.log("Hey inicializala pila primero");
        else {
            var Ingresar = prompt("Ingrese Valor a apilar (PUSH)");
            elementos.push();
            console.log("Ingreso exitoso");
        }
        return elementos;
    };
    NodoPila.peekPila = function () {
        if (this.elementos == null)
            console.log("Hey inicializala pila primero");
        else {
            console.log("Peek a la pila" + elementos.peekBack());
            console.log("Sacaste un elemento.");
        }
        return elementos;
    };
    NodoPila.popPila = function () {
        if (this.Nodo.elementos.length > 0) {
            console.log("Pop a la pila" + elementos.pop());
            console.log("Sacaste un elemento.");
            return this.Nodo.elementos.pop();
            ;
        }
        else {
            return null;
        }
    };
    NodoPila.salir = function () {
        if (this.elementos == null)
            console.log("Hey inicializala pila primero");
        else {
            if (elementos.isEmpty())
                elementos == null;
        }
        return this.elementos;
    };
    return NodoPila;
}());
