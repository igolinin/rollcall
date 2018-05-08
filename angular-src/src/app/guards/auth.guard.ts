import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {TeacherAuthService} from '../services/teacherServices/teacher-auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:TeacherAuthService, private router:Router){

  }

  canActivate(){
    if(this.authService.loggedIn()){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}