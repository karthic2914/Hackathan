import { TestBed, inject } from '@angular/core/testing';

import { LoginStateService } from './login-state.service';

describe('LoginStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginStateService]
    });
  });

  it('should be created', inject([LoginStateService], (service: LoginStateService) => {
    expect(service).toBeTruthy();
  }));
});
