import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  secretKey="abcdefg"

  constructor(private authService:AuthenticationService, private storageLocal:LocalStorageService) { }

  post(email:string, password:string){
    this.authService.auth(email,password).subscribe(data=>{
      this.storageLocal.saveLocal('auth-token',data.jwtToken);
    })
  }

  getToken()
  {
   console.log(this.storageLocal.getLocal('auth-token'))
  }


}


