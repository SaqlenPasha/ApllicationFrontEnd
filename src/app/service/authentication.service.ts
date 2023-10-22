import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIurl } from '../constants/APIurl';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  auth( username:string, password:string)
  {
    return this.http.post<any>(APIurl.authUrl(),{
      email:username,
      password:password
    });
  }

}
