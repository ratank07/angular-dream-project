import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { stringify } from 'querystring';
import { User } from "./user";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new User()

  constructor( private http: HttpClient) { }

  addUser(user){
    return this.http.post('http://localhost:3000/userroute/',user)
  }
  getUsers(){
    return this.http.get('http://localhost:3000/userroute/');
  }
   getUser(id){
    return this.http.get('http://localhost:3000/userroute/getone/?id='+id+'')
  }
  updateUser(id,user){
    return this.http.patch('http://localhost:3000/userroute/?id='+id+'',user)
  }
  deleteUser(id){
    return this.http.delete('http://localhost:3000/userroute/?id='+id+'')
  }
}
