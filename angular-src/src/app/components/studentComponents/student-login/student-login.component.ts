import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TeacherAuthService } from '../../../services/teacherServices/teacher-auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private router: Router,
    private authService:TeacherAuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

  this.authService.authenticateStudent(user).subscribe(data =>{
    if(data.success){
      this.authService.storeUserData(data.token, data.user);
      this.flashMessage.show('You are now logged in',{
        cssClass: 'alert-success',
        timeout: 5000});
        this.router.navigate(['student/dashboard']);
      } else {
         this.flashMessage.show(data.msg,{
         cssClass: 'alert-danger',
         timeout: 5000});
         this.router.navigate(['student/login']);
        }
      });
    }

}
