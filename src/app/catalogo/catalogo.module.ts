import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { CardComponent } from './components/card/card.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ContainerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    MaterialModule
  ]
})
export class CatalogoModule { }
