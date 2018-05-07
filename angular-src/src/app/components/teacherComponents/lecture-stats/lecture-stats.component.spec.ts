import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureStatsComponent } from './lecture-stats.component';

describe('LectureStatsComponent', () => {
  let component: LectureStatsComponent;
  let fixture: ComponentFixture<LectureStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
