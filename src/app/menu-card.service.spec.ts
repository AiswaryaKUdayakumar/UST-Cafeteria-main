import { TestBed } from '@angular/core/testing';

import { EmployeRegService } from './menu-card.service';

describe('EmployeRegService', () => {
  let service: EmployeRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}

function expect(service: EmployeRegService) {
  throw new Error('Function not implemented.');
}

