import { LectureStatsService } from './../../../services/teacherServices/lecture-stats.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lecture-stats',
  template: `<div class='jumbotron'>
   <div *ngFor="let student of students"><div [style.color]="student.present ? 'red' : 'green'">
   {{student.student.email}}\t{{student.student.Studentname}}\t\t{{student.present}}
   </div></div>

  </div>
  `,
  styleUrls: ['./lecture-stats.component.css']
})
export class LectureStatsComponent implements OnInit {
  @Input() public lecture;

  public students = [];
  

  constructor(private _lectureStatsService: LectureStatsService) { }

  ngOnInit() {
    this._lectureStatsService.getStats().subscribe(data => data.forEach(e =>{this.students.push(e)}))
    console.log(this.students)
  }
  displayColor(present: boolean){
    if(present==true)return "green";
    else return "red";
  }
}
