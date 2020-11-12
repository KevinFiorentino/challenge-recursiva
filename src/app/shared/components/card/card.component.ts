import { Component, Input } from '@angular/core';
import { Producto } from '@shared/models/producto.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() producto: Producto;

  constructor() { }

}
