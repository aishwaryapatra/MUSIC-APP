import { TestBed } from '@angular/core/testing';

import { DataStoreTransferService } from './data-store-transfer.service';

describe('DataStoreTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStoreTransferService = TestBed.get(DataStoreTransferService);
    expect(service).toBeTruthy();
  });
});
