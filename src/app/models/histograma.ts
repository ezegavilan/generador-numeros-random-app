import { Intervalo } from "./intervalo";

export class Histograma {
    intervalos: Intervalo[];
    pruebaBondadChiCuadrado: boolean;

    constructor(intervalos: Intervalo[], pruebaBondadChiCuadrado: boolean) {
        this.intervalos = intervalos;
        this.pruebaBondadChiCuadrado = pruebaBondadChiCuadrado;
    }
}