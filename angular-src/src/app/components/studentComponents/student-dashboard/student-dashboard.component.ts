import { Component, OnInit } from '@angular/core';
import { TeacherCourseService } from '../../../services/teacherServices/teacher-course.service'

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  myCourse : any;
  pincode : String;

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
    //alert('You have been registered to ' + this.myCourse.courseName + " lecture " + new Date());

    this.courseService.registerAttendance({lecture_id : this.myCourse._id, student_id : "5ae3217b099468229c6081f0", pin : this.pincode}).subscribe(data => {
      if(data.success == true) {
        alert('You are now registered to' + this.myCourse.courseName + " lecture " + new Date());
      } else {
      alert('Wops.. Did you use the right pincode and connected to KEA network ?');
      }
    })
}

}
