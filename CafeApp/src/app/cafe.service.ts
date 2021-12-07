import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cafe } from './Cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  
  constructor(private http: HttpClient) { }

  public getCafe(): Observable<Cafe[]>
  {
    return this.http.get<Cafe[]>('http://localhost:8080/shops/all');
  }

  public getCafeByName(cafeName: String): Observable<Cafe>
  {
    return this.http.get<Cafe>('http://localhost:8080/shops/find/' + cafeName);
  }

  public addCafe(cafe: Cafe): Observable<Cafe>
  {
    return this.http.post<Cafe>('http://localhost:8080/shops/add',cafe);
  }
  public addMultipleCafes(cafes: Cafe[]): Observable<Cafe[]>
  {
    return this.http.post<Cafe[]>('http://localhost:8080/shops/multiple',cafes);
  }

  public deleteCafeByName(name: String): Observable<void>
  {
    return this.http.delete<void>('http://localhost:8080/shops/delete/' + name);
  }

  public updateCafe(cafe: Cafe): Observable<Cafe>
  {
    return this.http.put<Cafe>('http://localhost:8080/shops/update',cafe);
  }

}
