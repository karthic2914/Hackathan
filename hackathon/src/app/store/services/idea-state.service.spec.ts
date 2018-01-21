import { TestBed, inject } from '@angular/core/testing';

import { IdeaStateService } from './idea-state.service';

describe('IdeaStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeaStateService]
    });
  });

  it('should be created', inject([IdeaStateService], (service: IdeaStateService) => {
    expect(service).toBeTruthy();
  }));
});
