import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import{HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
   {path: '', component: HomeComponent, pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    TeacherDashboardComponent,
    TeacherLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
