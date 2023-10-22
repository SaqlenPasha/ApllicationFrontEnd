import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/public/login/login.component';

import { SecureComponent } from './feature/secure/secure.component';
import { PublicComponent } from './feature/public/public.component';
// import { SecureComponent } from './feature/secure/secure/secure.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecureComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
