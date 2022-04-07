export class GenerarHistogramaRequest {
    n: number;
    seed: number;
    mod: number;
    multiplicador: number;
    incremento: number;
    intervalos: number;

    constructor(n: number, seed: number, mod: number, multiplicador: number, incremento: number, intervalos: number) {
        this.n = n;
        this.seed = seed;
        this.mod = mod;
        this.multiplicador = multiplicador;
        this.incremento = incremento;
        this.intervalos = intervalos;
    }
}