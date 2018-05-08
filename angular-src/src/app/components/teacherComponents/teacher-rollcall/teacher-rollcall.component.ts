import { Component, OnInit } from '@angular/core';
import { TeacherDashboardComponent } from "../teacher-dashboard/teacher-dashboard.component";
import { TeacherCourseService } from '../../../services/teacherServices/teacher-course.service';

@Component({
  selector: 'app-teacher-rollcall',
  templateUrl: './teacher-rollcall.component.html',
  styleUrls: ['./teacher-rollcall.component.css']
})
export class TeacherRollcallComponent implements OnInit {

  courseInfo: any;

  constructor(
    private courseService : TeacherCourseService
  ) { }

  ngOnInit() {
    this.courseInfo = (this.courseService.getCourseInfo());
    console.log(this.courseInfo);
  }

}
