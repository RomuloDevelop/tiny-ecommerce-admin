import {Product} from '../../../types/interfaces'
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'product/';
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>(this.url, { observe: 'response' })
  }
}
