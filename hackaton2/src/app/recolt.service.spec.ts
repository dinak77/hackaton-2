import { TestBed } from '@angular/core/testing';

import { RecoltService } from './recolt.service';

describe('RecoltService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecoltService = TestBed.get(RecoltService);
    expect(service).toBeTruthy();
  });
});
