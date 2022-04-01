import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Histograma } from '../models/histograma';

@Injectable({
  providedIn: 'root'
})
export class GetHistogramaMockService {

  histograma: Histograma = {
    intervalos: [
      {
        intervalo: 1,
        inferior: 0.0,
        superior: 0.2,
        marcaClase: 0.0,
        frecuencia: 0,
        proporcion: 0,
        frecuenciaAcumulada: 0,
        proporcionAcumulada: 0
      },
      {
        intervalo: 2,
        inferior: 0.2,
        superior: 0.4,
        marcaClase: 0.0,
        frecuencia: 0,
        proporcion: 0,
        frecuenciaAcumulada: 0,
        proporcionAcumulada: 0
      },
      {
        intervalo: 3,
        inferior: 0.4,
        superior: 0.6,
        marcaClase: 0.0,
        frecuencia: 0,
        proporcion: 0,
        frecuenciaAcumulada: 0,
        proporcionAcumulada: 0
      },
      {
        intervalo: 4,
        inferior: 0.6,
        superior: 0.8,
        marcaClase: 0.0,
        frecuencia: 0,
        proporcion: 0,
        frecuenciaAcumulada: 0,
        proporcionAcumulada: 0
      },
      {
        intervalo: 5,
        inferior: 0.8,
        superior: 1.0,
        marcaClase: 0.0,
        frecuencia: 0,
        proporcion: 0,
        frecuenciaAcumulada: 0,
        proporcionAcumulada: 0
      }
    ]
  };

  constructor() { }

  public getDefaultHistograma(): Observable<Histograma> {
    return new Observable<Histograma>(observer => {
      observer.next(this.histograma);
      observer.complete();
    });
  }
  
}
