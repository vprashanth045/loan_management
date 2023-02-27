import { TestBed } from '@angular/core/testing';

import { InovicesService } from './inovices.service';

describe('InovicesService', () => {
  let service: InovicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InovicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
