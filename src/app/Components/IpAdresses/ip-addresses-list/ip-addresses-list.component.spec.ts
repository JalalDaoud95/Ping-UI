import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddressesListComponent } from './ip-addresses-list.component';

describe('IpAddressesListComponent', () => {
  let component: IpAddressesListComponent;
  let fixture: ComponentFixture<IpAddressesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpAddressesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpAddressesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
