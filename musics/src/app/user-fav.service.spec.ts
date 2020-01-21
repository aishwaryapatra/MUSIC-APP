import { TestBed } from '@angular/core/testing';

import { UserFavService } from './user-fav.service';

describe('UserFavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFavService = TestBed.get(UserFavService);
    expect(service).toBeTruthy();
  });
});
