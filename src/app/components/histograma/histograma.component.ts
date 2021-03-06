import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenerarHistogramaRequest } from 'src/app/models/generar-histograma-request';
import { Histograma } from 'src/app/models/histograma';
import { GetHistogramaHttpService } from 'src/app/services/get-histograma-http.service';
import { GeneradorHttpService } from '../../services/generador-http.service';
import { Tabla } from '../../models/tabla';

@Component({
  selector: 'app-histograma',
  templateUrl: './histograma.component.html',
  styleUrls: ['./histograma.component.css']
})
export class HistogramaComponent implements OnInit {

  histogramaForm: FormGroup;
  histograma?: Histograma;
  tabla?: Tabla;
  cargado: boolean = false;
  pruebaChiCuadrado: boolean = false;

  constructor(private histogramaService: GetHistogramaHttpService, private generadorService: GeneradorHttpService, private fb: FormBuilder) {
    this.histogramaForm = this.crearFormulario();
  }

  ngOnInit(): void {

  }

  crearFormulario(): FormGroup {
    return this.fb.group({
      n: ['', Validators.required],
      semilla: ['', Validators.required],
      modulo: ['', Validators.required],
      multiplicador: ['', Validators.required],
      incremento: ['', Validators.required],
      intervalos: ['', Validators.required]
    });
  }

  cargarHistograma(req: GenerarHistogramaRequest) {
    this.histogramaService.getHistograma(req).subscribe(
      (histograma: Histograma) => {
        this.histograma = histograma;
        this.cargado = true;
        this.pruebaChiCuadrado = histograma.pruebaBondadChiCuadrado;
      }
    );
  }

  cargarTablaRandoms(req: GenerarHistogramaRequest): void {
    this.generadorService.generar(req).subscribe(
      (tabla: Tabla) => {
        this.tabla = tabla;
      }
    );
  }

  generarHistograma() {
    const n = this.histogramaForm.get('n')?.value;
    const semilla = this.histogramaForm.get('semilla')?.value;
    const modulo = this.histogramaForm.get('modulo')?.value;
    const multiplicador = this.histogramaForm.get('multiplicador')?.value;
    const incremento = this.histogramaForm.get('incremento')?.value;
    const intervalos = this.histogramaForm.get('intervalos')?.value;

    let req: GenerarHistogramaRequest = {
      n: n,
      seed: semilla,
      mod: modulo,
      multiplicador: multiplicador,
      incremento: incremento,
      intervalos: intervalos
    };

    if (this.histogramaForm.invalid) {
      return Object.values(this.histogramaForm.controls).forEach(control => {
        if(control instanceof FormGroup) {
          Object.values(control.controls).forEach(ctrl => ctrl.markAsTouched());
        }
        control.markAsTouched();
      });
    }

    this.cargarHistograma(req);
    this.cargarTablaRandoms(req);
  }

  get nInvalido() {
    return this.histogramaForm.get('n')?.invalid && this.histogramaForm.get('n')?.touched;
  }

  get semillaInvalido() {
    return this.histogramaForm.get('semilla')?.invalid && this.histogramaForm.get('semilla')?.touched;
  }

  get moduloInvalido() {
    return this.histogramaForm.get('modulo')?.invalid && this.histogramaForm.get('modulo')?.touched;
  }

  get multiplicadorInvalido() {
    return this.histogramaForm.get('multiplicador')?.invalid && this.histogramaForm.get('multiplicador')?.touched;
  }

  get incrementoInvalido() {
    return this.histogramaForm.get('incremento')?.invalid && this.histogramaForm.get('incremento')?.touched;
  }
}
