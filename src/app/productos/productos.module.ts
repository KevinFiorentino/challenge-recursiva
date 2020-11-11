import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ContainerComponent } from './components/container/container.component';

import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ProductosModule { }
