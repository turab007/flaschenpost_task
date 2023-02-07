import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from './models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'https://flapotest.blob.core.windows.net/test/ProductData.json'
  constructor(
    private http: HttpClient) { }

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

}
