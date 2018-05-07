import { TestBed, inject } from '@angular/core/testing';

import { TeacherCourseService } from './teacher-course.service';

describe('TeacherCourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherCourseService]
    });
  });

  it('should be created', inject([TeacherCourseService], (service: TeacherCourseService) => {
    expect(service).toBeTruthy();
  }));
});
