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
        title: 'Bebidas',
        image: '../../../../assets/images/bebidas.png'
      },
      {
        title: 'Cafetería',
        image: '../../../../assets/images/cafeteria.png'
      },
      {
        title: 'Chocolate',
        image: '../../../../assets/images/chocolate.png'
      },
      {
        title: 'Copadulce',
        image: '../../../../assets/images/copadulce.png'
      },
      {
        title: 'Especialidades',
        image: '../../../../assets/images/especialidades.png'
      },
      {
        title: 'Promos',
        image: '../../../../assets/images/promociones.png'
      },
      {
        title: 'Helados',
        image: '../../../../assets/images/tresgustos.png'
      },
      {
        title: 'Copahelada',
        image: '../../../../assets/images/copahelada.png'
      }
    ];
  }

  public getProductos(): Producto[] {
    return [
      {
        title: 'Simple',
        image: '../../../../assets/images/simple.png'
      },
      {
        title: 'Cucuruchos',
        image: '../../../../assets/images/cucuruchos.png'
      },
      {
        title: 'Especial',
        image: '../../../../assets/images/especial.png'
      },
      {
        title: 'Especialidades',
        image: '../../../../assets/images/especialidades.png'
      }
    ];
  }

}
