import { TestBed } from '@angular/core/testing';

import { ArmouryService } from './armoury.service';

describe('ArmouryService', () => {
  let service: ArmouryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmouryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
