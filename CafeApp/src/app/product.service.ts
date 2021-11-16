import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private apiLocalUrl: string = "";


  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>('http://localhost:8080/products/all')
  }

  public getProductByName(name: string): Observable<Product>
  {
    return this.http.get<Product>('http://localhost:8080/products/find/' + name);
  }

  public setProduct(product: Product): Observable<Product>
  {
    return this.http.post<Product>('http://localhost:8080/products/add',product);
  }

  public updateProduct(product: Product): Observable<Product>
  {
    return this.http.put<Product>('http://localhost:8080/products/update',product);
  }

  public deleteProduct(id: number): Observable<void>
  {
    return this.http.delete<void>('http://localhost:8080/products/delete/' + id)
  }
}
