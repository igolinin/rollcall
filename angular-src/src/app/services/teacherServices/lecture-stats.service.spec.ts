import { TestBed, inject } from '@angular/core/testing';

import { LectureStatsService } from './lecture-stats.service';

describe('LectureStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LectureStatsService]
    });
  });

  it('should be created', inject([LectureStatsService], (service: LectureStatsService) => {
    expect(service).toBeTruthy();
  }));
});
