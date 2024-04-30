// src/Exploracion.ts
import { Planeta, Recurso } from './Planeta';

function explorar(planeta: Planeta) {
    console.log(`Explorando el planeta ${planeta.nombre}`);
    console.log('Recursos del planeta:', planeta.recursos);
}

export default explorar;
