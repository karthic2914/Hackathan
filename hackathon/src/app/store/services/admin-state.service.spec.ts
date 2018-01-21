import { TestBed, inject } from '@angular/core/testing';

import { AdminStateService } from './admin-state.service';

describe('AdminStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminStateService]
    });
  });

  it('should be created', inject([AdminStateService], (service: AdminStateService) => {
    expect(service).toBeTruthy();
  }));
});
