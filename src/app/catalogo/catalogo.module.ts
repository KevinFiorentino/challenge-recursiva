import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoRoutingModule } from './catalogo-routing.module';

import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

import { ContainerComponent } from './components/container/container.component';

import { HttpService } from '@shared/services/http/http.service';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    HttpService
  ]
})
export class CatalogoModule { }
