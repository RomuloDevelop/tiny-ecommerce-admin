import {Client} from '../../../types/interfaces'
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = 'client/';
  
  constructor(private http: HttpClient) { }

  getClient(id: number): Observable<HttpResponse<Client>> {
    return this.http.get<Client>(this.url + id, { observe: 'response' })
  }
}
