import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = "";
  constructor(private http: HttpClient) 
  { 


  }

  public getUser(): Observable<User[]>
  {
    return this.http.get<User[]>('http://localhost:8080/user/all');
  }

  public addUser(user: User): Observable<User>
  {
    return this.http.post<User>('${this.apiServerUrl}/user/add',user);
  }

  public deleteUser(id: number): Observable<void>
  {
    return this.http.delete<void>('${this.apiServerUrl}/user/delete/${id}');
  }

  public updateUser(user: User): Observable<User>
  {
    return this.http.put<User>('${this,apiServerUrl}/user/update',user);
  }
}
