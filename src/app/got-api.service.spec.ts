import { TestBed } from '@angular/core/testing';

import { GotApiService } from './got-api.service';

describe('GotApiService', () => {
  let service: GotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
