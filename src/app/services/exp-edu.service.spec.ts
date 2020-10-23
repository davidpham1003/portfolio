import { TestBed } from '@angular/core/testing';

import { ExpEduService } from './exp-edu.service';

describe('ExpEduService', () => {
  let service: ExpEduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpEduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
