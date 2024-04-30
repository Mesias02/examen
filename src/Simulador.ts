// src/Simulador.ts
import explorar from './Exploracion';
import recolectarRecursos from './Recoleccion';
import manejarEvento from './ManejoEventos';
import { Planeta, Recurso } from './Planeta';
import Evento from './Evento';

async function iniciarSimulador() {
    const planetas: Planeta[] = [
        { nombre: 'Tierra', recursos: { [Recurso.Agua]: 1000, [Recurso.Mineral]: 500, [Recurso.Vegetacion]: 300 } },
        { nombre: 'Marte', recursos: { [Recurso.Agua]: 500, [Recurso.Mineral]: 300, [Recurso.Vegetacion]: 200 } },
        { nombre: 'Luna', recursos: { [Recurso.Agua]: 200, [Recurso.Mineral]: 100, [Recurso.Vegetacion]: 50 } }
    ];

    console.log('Bienvenido al Simulador de Exploración Espacial');

    // Aquí puedes implementar la lógica para controlar el flujo del simulador
}

export default iniciarSimulador;
