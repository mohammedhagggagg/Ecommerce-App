import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsRequestsService {
  constructor(private http: HttpClient) {}
  getProductsList(): Observable<any> {
    return this.http.get('https://dummyjson.com/products', {
      params: { limit: 15 },
      headers: {
        Authorization: 'access_token',
      },
    });
  }
  getProductById(id: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
  addProduct(product: Iproduct): Observable<any> 
  {
    return this.http.post('https://dummyjson.com/products/add', product,
      {
        headers: {
          Authorization: 'access_token',
        },
        params:{
          limit: 15
        },
        
      });
  }
}
