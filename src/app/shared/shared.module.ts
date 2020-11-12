import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';

import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    CardComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardComponent
  ],
  providers: []
})
export class SharedModule { }
