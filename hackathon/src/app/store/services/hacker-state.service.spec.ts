import { TestBed, inject } from '@angular/core/testing';

import { HackerStateService } from './hacker-state.service';

describe('HackerStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackerStateService]
    });
  });

  it('should be created', inject([HackerStateService], (service: HackerStateService) => {
    expect(service).toBeTruthy();
  }));
});
