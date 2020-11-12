import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from '@shared/models/producto.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() producto: Producto;

  constructor(public dialog: MatDialog) { }

  public openDialog(): void {
    this.dialog.open(ModalComponent, {
      data: this.producto
    });
  }

}
