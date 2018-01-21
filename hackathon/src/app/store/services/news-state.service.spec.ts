import { TestBed, inject } from '@angular/core/testing';

import { NewsStateService } from './news-state.service';

describe('NewsStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsStateService]
    });
  });

  it('should be created', inject([NewsStateService], (service: NewsStateService) => {
    expect(service).toBeTruthy();
  }));
});
