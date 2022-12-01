import { TestBed } from '@angular/core/testing';

import { EmployeedService } from './employeed.service';

describe('EmployeedService', () => {
  let service: EmployeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
