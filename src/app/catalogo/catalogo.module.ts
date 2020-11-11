import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { ContainerComponent } from './components/container/container.component';

import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ContainerComponent,
    // CardComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class CatalogoModule { }
