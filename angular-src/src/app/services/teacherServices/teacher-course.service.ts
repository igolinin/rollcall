import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class TeacherCourseService {

  authToken: any;
  courseInfo: any;

  constructor(private http:Http) { }


  getTeacherCourses() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/teacher/dayslectures',{headers: headers})
      .map(res => res.json());
  }

  setCourseInfo(courseInfo) {
    this.courseInfo = courseInfo;
  }

  getCourseInfo() {
    return this.courseInfo;
  }

  getStudentCourse(student_id) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/student/daysLecture', student_id ,{headers: headers})
      .map(res => res.json());
  }

  registerAttendance(data) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/student/checkin', data, {headers: headers})
      .map(res => res.json());
  }

  generatePin(courseID) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/teacher/genpin', {headers: headers})
    .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
