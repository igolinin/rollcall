import { Component, OnInit } from '@angular/core';
import { TeacherCourseService } from '../../../services/teacherServices/teacher-course.service'

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  myCourse : any;

  constructor(
    private courseService : TeacherCourseService
  ) { }

  ngOnInit() {
    this.courseService.getStudentCourse().subscribe(data => {
      this.myCourse = data;
    })
  }

  onLoginSubmit(){
    this.courseService.registerAttendance().subscribe(data => {
      console.log(data);
    })
  }

}
