import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherLoginComponent } from './components/teacherComponents/teacher-login/teacher-login.component';
import { TeacherDashboardComponent } from './components/teacherComponents/teacher-dashboard/teacher-dashboard.component';

import { TeacherAuthService } from './services/teacherServices/teacher-auth.service'
import { TeacherCourseService } from './services/teacherServices/teacher-course.service';
import { TeacherRollcallComponent } from './components/teacherComponents/teacher-rollcall/teacher-rollcall.component';
import { LectureStatsComponent } from './components/teacherComponents/lecture-stats/lecture-stats.component';

import { StudentLoginComponent } from './components/studentComponents/student-login/student-login.component';
import { StudentDashboardComponent } from './components/studentComponents/student-dashboard/student-dashboard.component';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [

  // home
  {path: '', component: HomeComponent},

  // student routes
  {path: 'student/login', component: StudentLoginComponent},
  {path: 'student/dashboard', component: StudentDashboardComponent, canActivate:[AuthGuard]},

  // teacher routes
  {path: 'teacher/login', component: TeacherLoginComponent},
  {path: 'teacher/dashboard', component: TeacherDashboardComponent, canActivate:[AuthGuard]},
  {path: 'teacher/rollcall', component: TeacherRollcallComponent, canActivate:[AuthGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherLoginComponent,
    TeacherDashboardComponent,
    TeacherRollcallComponent,
    LectureStatsComponent,
    StudentLoginComponent,
    StudentDashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    HttpModule
  ],
  providers: [TeacherAuthService, TeacherCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
