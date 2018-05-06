import { Component, OnInit } from '@angular/core';
import { TeacherCourseService } from '../../../services/teacherServices/teacher-course.service'

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  courses = [];

  startRollcall() {
    console.log('hello');
  }

  constructor(
      private router: Router,
      private authService:TeacherAuthService
  ) { }

  ngOnInit() {
    console.log('hej');
  }

}
