"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function manejarEvento(evento) {
    console.log("Se ha encontrado un evento: ".concat(evento.nombre));
    console.log("Efecto del evento: ".concat(evento.efecto));
}
exports.default = manejarEvento;
