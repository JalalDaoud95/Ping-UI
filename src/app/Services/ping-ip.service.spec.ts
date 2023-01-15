import { TestBed } from '@angular/core/testing';

import { PingIpService } from './ping-ip.service';

describe('PingIpService', () => {
  let service: PingIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PingIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
