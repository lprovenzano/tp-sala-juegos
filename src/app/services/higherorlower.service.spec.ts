import { TestBed } from '@angular/core/testing';

import { HigherorlowerService } from './higherorlower.service';

describe('HigherorlowerService', () => {
  let service: HigherorlowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HigherorlowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
