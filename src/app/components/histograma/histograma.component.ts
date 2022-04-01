import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenerarHistogramaRequest } from 'src/app/models/generar-histograma-request';
import { Histograma } from 'src/app/models/histograma';
import { GetHistogramaHttpService } from 'src/app/services/get-histograma-http.service';

@Component({
  selector: 'app-histograma',
  templateUrl: './histograma.component.html',
  styleUrls: ['./histograma.component.css']
})
export class HistogramaComponent implements OnInit {

  histogramaForm: FormGroup;
  histograma?: Histograma;

  constructor(private histogramaService: GetHistogramaHttpService, private fb: FormBuilder) {
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
    });
  }

  cargarHistograma(req: GenerarHistogramaRequest) {
    this.histogramaService.getHistograma(req).subscribe(
      (histograma: Histograma) => {
        this.histograma = histograma;
      }
    );
  }

  generarHistograma() {
    const n = this.histogramaForm.get('n')?.value;
    const semilla = this.histogramaForm.get('semilla')?.value;
    const modulo = this.histogramaForm.get('modulo')?.value;
    const multiplicador = this.histogramaForm.get('multiplicador')?.value;
    const incremento = this.histogramaForm.get('incremento')?.value;

    let req: GenerarHistogramaRequest = {
      n: n,
      seed: semilla,
      mod: modulo,
      multiplicador: multiplicador,
      incremento: incremento
    };

    this.cargarHistograma(req);
  }

}
