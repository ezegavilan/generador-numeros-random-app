import { Iteracion } from "./iteracion";

export class Tabla {
    iteraciones: Iteracion[];

    constructor(iteraciones: Iteracion[]) {
        this.iteraciones = iteraciones;
    }
}