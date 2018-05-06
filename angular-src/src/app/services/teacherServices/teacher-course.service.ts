import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class TeacherCourseService {

  authToken: any;

  constructor(private http:Http) { }

  getTeacherCourses() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/teacher/dayslectures',{headers: headers})
      .map(res => res.json());
  }

  startNewRollcall() {
    console.log("HELLO!");
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
