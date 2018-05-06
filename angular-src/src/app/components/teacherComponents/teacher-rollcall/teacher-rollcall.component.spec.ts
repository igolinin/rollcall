import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRollcallComponent } from './teacher-rollcall.component';

describe('TeacherRollcallComponent', () => {
  let component: TeacherRollcallComponent;
  let fixture: ComponentFixture<TeacherRollcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherRollcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRollcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
