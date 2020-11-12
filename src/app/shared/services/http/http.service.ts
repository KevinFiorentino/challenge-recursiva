import { Injectable } from '@angular/core';
import { Producto } from '@shared/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  public getCatalogo(): Producto[] {
    return [
      {
        title: 'Titulo',
        image: '../../../../assets/images/cucuruchos.png'
      },
      {
        title: 'Titulo2',
        image: '../../../../assets/images/cucuruchos.png'
      }
    ];
  }

  public getProductos(): Producto[] {
    return [
      {
        title: 'Titulo',
        image: '../../../../assets/images/cucuruchos.png'
      },
      {
        title: 'Titulo2',
        image: '../../../../assets/images/cucuruchos.png'
      }
    ];
  }

}
