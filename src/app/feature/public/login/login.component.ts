import { LocationChangeListener } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from '../../../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  constructor(private fb:FormBuilder, private loginService:LoginServiceService) { 
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  

  login()
  {
    this.loginService.post(this.loginForm.get("email").value,this.loginForm.get("password").value);
    this.loginService.getToken();
  }

}
