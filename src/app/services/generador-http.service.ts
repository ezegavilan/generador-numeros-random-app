import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenerarHistogramaRequest } from '../models/generar-histograma-request';
import { Observable, map } from 'rxjs';
import { Tabla } from '../models/tabla';

@Injectable({
  providedIn: 'root'
})
export class GeneradorHttpService {

  private url: string = 'http://localhost:8080/api/generador/custom';

  constructor(private http: HttpClient) {

  }

  public generar(request: GenerarHistogramaRequest): Observable<Tabla> {
    return this.http.post(this.url, request).pipe(
      map((res: any) => res.tabla)
    );
  }
}
