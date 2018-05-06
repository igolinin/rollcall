import { TestBed, inject } from '@angular/core/testing';

import { TeacherAuthService } from './teacher-auth.service';

describe('TeacherAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherAuthService]
    });
  });

  it('should be created', inject([TeacherAuthService], (service: TeacherAuthService) => {
    expect(service).toBeTruthy();
  }));
});
