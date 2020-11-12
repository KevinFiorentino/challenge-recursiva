import { Component, OnInit } from '@angular/core';
import { Producto } from '@shared/models/producto.model';
import { HttpService } from '@shared/services/http/http.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public catalogo: Producto[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.catalogo = this.httpService.getCatalogo();
  }

}
