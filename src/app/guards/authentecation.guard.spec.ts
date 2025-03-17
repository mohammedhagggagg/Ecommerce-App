import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authentecationGuard } from './authentecation.guard';

describe('authentecationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authentecationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
