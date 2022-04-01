export class Intervalo {
    intervalo: number;
    inferior: number;
    superior: number;
    marcaClase: number;
    frecuencia: number;
    proporcion: number;
    frecuenciaAcumulada: number;
    proporcionAcumulada: number

    constructor(intervalo: number, inferior: number, superior: number, marcaClase: number, frecuencia: number, proporcion: number, frecuenciaAcumulada: number, proporcionAcumulada: number) {
        this.intervalo = intervalo;
        this.inferior = inferior;
        this.superior = superior;
        this.marcaClase = marcaClase;
        this.frecuencia = frecuencia;
        this.proporcion = proporcion;
        this.frecuenciaAcumulada = frecuenciaAcumulada;
        this.proporcionAcumulada = proporcionAcumulada;
    }
}