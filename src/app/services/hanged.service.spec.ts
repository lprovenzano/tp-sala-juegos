import { TestBed } from '@angular/core/testing';

import { HangedService } from './hanged.service';

describe('HangedService', () => {
  let service: HangedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
