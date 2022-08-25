import { TestBed } from '@angular/core/testing';

import { VisitoridService } from './visitorid.service';

describe('VisitoridService', () => {
  let service: VisitoridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitoridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
