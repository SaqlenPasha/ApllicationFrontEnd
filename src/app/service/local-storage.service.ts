import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  secretKey='abcdefg';
  constructor() { }

  saveLocal(key:string, value:string)
  {
    localStorage.setItem(key,this.encrypt(value));
  }

  getLocal(key:string){
    let value= localStorage.getItem(key) || "";
    return this.decrypt(value);
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.secretKey).toString();
  }

  private decrypt(txt: string): string {
    return CryptoJS.AES.decrypt(txt,this.secretKey).toString(CryptoJS.enc.Utf8);
  }
}
