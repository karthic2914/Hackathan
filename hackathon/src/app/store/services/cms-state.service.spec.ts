import { TestBed, inject } from '@angular/core/testing';

import { CmsStateService } from './cms-state.service';

describe('CmsStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmsStateService]
    });
  });

  it('should be created', inject([CmsStateService], (service: CmsStateService) => {
    expect(service).toBeTruthy();
  }));
});
