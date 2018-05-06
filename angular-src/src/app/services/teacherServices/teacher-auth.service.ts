import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {Http, Headers} from '@angular/http';

@Injectable()
export class TeacherAuthService {

  authToken: any;
  user: any;

  constructor(private http:Http) { }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
    .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');

  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}