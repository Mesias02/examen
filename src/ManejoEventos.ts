// src/ManejoEventos.ts
import Evento from './Evento';

function manejarEvento(evento: Evento) {
    console.log(`Se ha encontrado un evento: ${evento.nombre}`);
    console.log(`Efecto del evento: ${evento.efecto}`);
}

export default manejarEvento;
