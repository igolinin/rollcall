import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherLoginComponent } from './components/teacherComponents/teacher-login/teacher-login.component';
import { TeacherDashboardComponent } from './components/teacherComponents/teacher-dashboard/teacher-dashboard.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teacher/login', component: TeacherLoginComponent}
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
