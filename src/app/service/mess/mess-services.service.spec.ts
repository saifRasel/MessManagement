import { TestBed } from '@angular/core/testing';

import { MessServicesService } from './mess-services.service';

describe('MessServicesService', () => {
  let service: MessServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
