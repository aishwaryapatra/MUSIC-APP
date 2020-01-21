import { TestBed } from '@angular/core/testing';

import { SpotifyServService } from './spotify-serv.service';

describe('SpotifyServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyServService = TestBed.get(SpotifyServService);
    expect(service).toBeTruthy();
  });
});
