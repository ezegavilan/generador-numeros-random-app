import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Histograma } from '../../../models/histograma';
import { Intervalo } from '../../../models/intervalo';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit, OnChanges {

   @Input() histograma?: Histograma;
  chart!: Chart;
  

  constructor() {
     
  }
   ngOnChanges(changes: SimpleChanges): void {
     this.cargarGrafico();
   }

  cargarGrafico() {
   this.chart = new Chart(
      {
         chart: {
           type: 'column',
        },
        title: {
           text: `Generación de números aleatorios`
        },
        xAxis:{
           categories: this.histograma!.intervalos.map(intervalo => intervalo.marcaClase.toString()),
           crosshair: true        
        },     
        yAxis : {
           min: 0,
           title: {
              text: 'Frecuencia'
           }      
        },
        tooltip : {
           headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
           pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
              '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
        },
        plotOptions : {
           column: {
              pointPadding: 0.2,
              borderWidth: 0
           }
        },
        series: [{
           name: 'Generada',
           type: 'column',
           data: this.histograma?.intervalos.map(intervalo => parseInt(intervalo.frecuencia))
        }, 
        {
           name: 'Esperada',
           type: 'column',
           data: this.histograma?.intervalos.map(intervalo => parseInt(intervalo.frecuenciaEsperada))
        }]
       }
     );
  }

  ngOnInit(): void {
     this.cargarGrafico();
  }
}
