export class Intervalo {
    intervalo: string;
    inferior: string;
    superior: string;
    marcaClase: string;
    frecuencia: string;
    frecuenciaEsperada: string;
    proporcion: string;
    frecuenciaAcumulada: string;
    proporcionAcumulada: string;

    constructor(intervalo: string, inferior: string, superior: string, marcaClase: string, frecuencia: string, frecuenciaEsperada: string, proporcion: string, frecuenciaAcumulada: string, proporcionAcumulada: string) {
        this.intervalo = intervalo;
        this.inferior = inferior;
        this.superior = superior;
        this.marcaClase = marcaClase;
        this.frecuencia = frecuencia;
        this.frecuenciaEsperada = frecuenciaEsperada;
        this.proporcion = proporcion;
        this.frecuenciaAcumulada = frecuenciaAcumulada;
        this.proporcionAcumulada = proporcionAcumulada;
    }
}