import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, userResponse } from '../types/User.type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) {}

  getUsers() : Observable<userResponse> {
    return this.http.get<userResponse>(this.url);
  }
}
