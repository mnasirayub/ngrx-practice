import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleProductModel } from '../models/productsModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<SingleProductModel[]> {
    return this.http.get<SingleProductModel[]>('http://localhost:3000/products');
  }

}
