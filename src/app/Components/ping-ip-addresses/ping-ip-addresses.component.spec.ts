import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingIpAddressesComponent } from './ping-ip-addresses.component';

describe('PingIpAddressesComponent', () => {
  let component: PingIpAddressesComponent;
  let fixture: ComponentFixture<PingIpAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PingIpAddressesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PingIpAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
