import { TestBed } from '@angular/core/testing';

import { InterceptorServService } from './interceptor-serv.service';

describe('InterceptorServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorServService = TestBed.get(InterceptorServService);
    expect(service).toBeTruthy();
  });
});
