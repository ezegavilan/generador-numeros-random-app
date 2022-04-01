import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistogramaComponent } from './components/histograma/histograma.component';

const routes: Routes = [
  { path: 'home', component: HistogramaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
