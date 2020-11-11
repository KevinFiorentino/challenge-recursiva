import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoRoutingModule } from './pago-routing.module';

import { MaterialModule } from '@material/material.module';

import { FormPagoComponent } from './components/form-pago/form-pago.component';


@NgModule({
  declarations: [
    FormPagoComponent
  ],
  imports: [
    CommonModule,
    PagoRoutingModule,
    MaterialModule
  ]
})
export class PagoModule { }
