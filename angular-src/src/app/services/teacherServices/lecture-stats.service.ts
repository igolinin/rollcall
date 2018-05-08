import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Student} from './student'

@Injectable()
export class LectureStatsService {

  constructor(private http: HttpClient) { }

  getStats(): Observable<Student[]>{
      return this.http.get<Student[]>('http://localhost:3000/teacher/getstats/5aedbde5270fe506683620a7')
  }

}
