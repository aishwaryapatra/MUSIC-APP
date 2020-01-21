import { TestBed } from '@angular/core/testing';

import { SpringDataServiceService } from './spring-data-service.service';

describe('SpringDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringDataServiceService = TestBed.get(SpringDataServiceService);
    expect(service).toBeTruthy();
  });
});
