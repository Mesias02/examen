// src/Recoleccion.ts
import { Planeta, Recurso } from './Planeta';

function recolectarRecursos(planeta: Planeta) {
    console.log(`Recolectando recursos del planeta ${planeta.nombre}`);
    console.log('Recursos recolectados:', planeta.recursos);
}

export default recolectarRecursos;
