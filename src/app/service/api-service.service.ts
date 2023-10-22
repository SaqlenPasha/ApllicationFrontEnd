import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  constructor(private http:HttpClient) {
   }

   authUrl='/auth';
   apiUrl='/api';
   
  //  loginFunc(data)
  //  {
  //   return this.http.post("")
  //  }

}
