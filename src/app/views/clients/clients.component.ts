import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  title = 'lykos-adm';
  resume = [
    {
      name: 'Products',
      quantity: 4,
      route: 'products'
    },
    {
      name: 'Categories',
      quantity: 10,
      route: 'categories'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toRoute(route: string) {
    if(route !== 'categories') this.router.navigate([route])
  }
}
