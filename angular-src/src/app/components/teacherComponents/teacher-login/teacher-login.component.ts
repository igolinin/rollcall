import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TeacherAuthService } from '../../../services/teacherServices/teacher-auth.service'

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})

export class TeacherLoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
  }

}
