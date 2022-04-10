import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GenerarHistogramaRequest } from '../models/generar-histograma-request';
import { Histograma } from '../models/histograma';

@Injectable({
  providedIn: 'root'
})
export class GetHistogramaHttpService {

  private url = 'https://randoms.api.centaurit.online/api/histograma/custom';

  constructor(private http: HttpClient) {

  }

  public getHistograma(request: GenerarHistogramaRequest): Observable<Histograma> {
    return this.http.post<Histograma>(this.url, request).pipe(
      map((res: any) => res.histograma)
    );
  }
}
