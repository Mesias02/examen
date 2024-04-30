// src/Planeta.ts
enum Recurso {
    Agua,
    Mineral,
    Vegetacion
}

interface Planeta {
    nombre: string;
    recursos: Record<Recurso, number>;
}

export { Planeta, Recurso };
