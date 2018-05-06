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

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teacher/login', component: TeacherLoginComponent},
  {path: 'teacher/dashboard', component: TeacherDashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherLoginComponent,
    TeacherDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    HttpModule
  ],
  providers: [TeacherAuthService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
