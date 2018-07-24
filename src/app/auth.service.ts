import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
firstname:string;
lastname:string;
user=Array;
  constructor() {
   
   }
  postUser(first:string,last:string){
    this.firstname=first;
    this.lastname=last;
    localStorage.setItem('username', ( this.firstname + " " + this.lastname));
    
  }
  getUser(){
 return localStorage.getItem('username');
  }
  logout(){
    return localStorage.clear;
  }
}
