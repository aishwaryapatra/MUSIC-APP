import { TestBed } from '@angular/core/testing';

import { RouterServiceService } from './router-service.service';

describe('RouterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterServiceService = TestBed.get(RouterServiceService);
    expect(service).toBeTruthy();
  });
});
