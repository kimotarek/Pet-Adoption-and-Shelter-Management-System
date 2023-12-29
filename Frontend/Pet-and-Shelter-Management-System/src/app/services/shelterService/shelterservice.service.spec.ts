import { TestBed } from '@angular/core/testing';

import { ShelterserviceService } from './shelterservice.service';

describe('ShelterserviceService', () => {
  let service: ShelterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
