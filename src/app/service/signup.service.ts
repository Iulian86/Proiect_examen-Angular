import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UserDtoResponse} from "../model/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseUrl = 'http://localhost:9191/users';
  constructor(private http: HttpClient) { }

  saveUser(user: User):Observable<any>  {
    return this.http.post('http://localhost:9191/users', user, {responseType: 'text' as 'json'});
  }

  findEmail(email: string): Observable<UserDtoResponse> {
    return this.http.get<UserDtoResponse>(`${this.baseUrl}?email=${email}`);
  }
}
