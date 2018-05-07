import { Component, OnInit } from '@angular/core';
import { TeacherCourseService } from '../../../services/teacherServices/teacher-course.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  courses = [];



  startRollcall() {
    this.router.navigate(['teacher/rollcall']);
  }

  constructor(
      private router: Router,
      private courseService:TeacherCourseService
  ) { }

  ngOnInit() {
    this.courseService.getTeacherCourses().subscribe(course => {
      course.forEach(e => {


        let newCourse = {
          name: e.courseName,
          date: e.date,
          pin: e.pin
        };


        this.courses.push(newCourse));
        console.log(course);
      }
    });
  }

}
