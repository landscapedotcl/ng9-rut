import { TestBed } from '@angular/core/testing';

import { Ng9RutService } from './ng9-rut.service';

describe('Ng9RutService', () => {
  let service: Ng9RutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng9RutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
