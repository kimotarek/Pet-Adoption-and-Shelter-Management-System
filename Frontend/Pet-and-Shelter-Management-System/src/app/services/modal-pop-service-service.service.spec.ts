import { TestBed } from '@angular/core/testing';

import { ModalPopServiceService } from './modal-pop-service-service.service';

describe('ModalPopServiceServiceService', () => {
  let service: ModalPopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalPopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
