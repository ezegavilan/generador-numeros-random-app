import { Intervalo } from "./intervalo";

export class Histograma {
    intervalos: Intervalo[];

    constructor(intervalos: Intervalo[]) {
        this.intervalos = intervalos;
    }
}