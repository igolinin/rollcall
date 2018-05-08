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
    this.courseService.getStudentCourse({student_id : "5ae3217b099468229c6081f0"}).subscribe(data => {
      this.myCourse = data[0];
      console.log(this.myCourse);
    });

  }

  testSmt() {
    this.courseService.registerAttendance({lecture_id : this.myCourse._id, student_id : "5ae3217b099468229c6081f0"}).subscribe(data => {
      alert(data.success);
  })
}
}
