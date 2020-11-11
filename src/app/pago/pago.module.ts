import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoRoutingModule } from './pago-routing.module';

import { MaterialModule } from '@material/material.module';

import { FormPagoComponent } from './components/form-pago/form-pago.component';
import { PagoComponent } from './components/pago/pago.component';
import { PagoTotalComponent } from './components/pago-total/pago-total.component';


@NgModule({
  declarations: [
    FormPagoComponent,
    PagoComponent,
    PagoTotalComponent
  ],
  imports: [
    CommonModule,
    PagoRoutingModule,
    MaterialModule
  ]
})
export class PagoModule { }
