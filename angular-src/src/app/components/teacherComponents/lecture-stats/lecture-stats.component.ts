import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lecture-stats',
  template: `<div class='jumbotron'>
   <div *ngFor="let student of students">
   {{student.email}}
   </div>

  </div>
  `,
  styleUrls: ['./lecture-stats.component.css']
})
export class LectureStatsComponent implements OnInit {
  @Input() public lecture;
  constructor() { }

  ngOnInit() {
  }

}
