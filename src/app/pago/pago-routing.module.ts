import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPagoComponent } from './components/form-pago/form-pago.component';

const routes: Routes = [
  { path: '', component: FormPagoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoRoutingModule { }
