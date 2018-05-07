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
<<<<<<< HEAD
import { LectureStatsComponent } from './components/teacherComponents/lecture-stats/lecture-stats.component';
=======
import { StudentLoginComponent } from './components/studentComponents/student-login/student-login.component';
import { StudentDashboardComponent } from './components/studentComponents/student-dashboard/student-dashboard.component';
>>>>>>> 0898c84172b08e4fb629a0c2f766d60e7ad5c9ea


const appRoutes: Routes = [

  // home
  {path: '', component: HomeComponent},

  // student routes
  {path: 'student/login', component: StudentLoginComponent},
  {path: 'student/dashboard', component: StudentDashboardComponent},

  // teacher routes
  {path: 'teacher/login', component: TeacherLoginComponent},
  {path: 'teacher/dashboard', component: TeacherDashboardComponent},
  {path: 'teacher/rollcall', component: TeacherRollcallComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherLoginComponent,
    TeacherDashboardComponent,
    TeacherRollcallComponent,
<<<<<<< HEAD
    LectureStatsComponent,
=======
    StudentLoginComponent,
    StudentDashboardComponent,
>>>>>>> 0898c84172b08e4fb629a0c2f766d60e7ad5c9ea

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
