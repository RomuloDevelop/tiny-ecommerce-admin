import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Client} from '../../types/interfaces'
import { Store } from '@ngrx/store';
import { setClient } from '../../store/clients/client.action';
import { setProducts } from '../../store/products/product.action';
import { ClientService } from '../services/client/client.service';
import {ProductsService} from '../services/product/products.service'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  showFiller = false;
  menu = [
    {
      name: 'Inicio',
      route: 'home',
      icon:'building'
    },
    {
      name: 'Productos',
      route: 'products',
      icon:'business_center'
    },
    {
      name: 'Categorias',
      route: 'categories',
      icon:'category'
    }
  ];
  
  client$: Observable<Client>

  constructor(
    public clientService: ClientService,
    private productsService: ProductsService,
    private store: Store<{ client: Client }>,
    private router: Router
  ) {
    this.client$ = store.select('client');
  }

  ngOnInit(): void {
    this.clientService.getClient(1)
    .subscribe(resp => {
      this.store.dispatch(setClient(resp.body))
    });
    this.productsService.getProducts()
    .subscribe(resp => {
      this.store.dispatch(setProducts({data: resp.body}))
    });
  }

  toRoute(page: string) {
    this.router.navigate([page])
  }

}
