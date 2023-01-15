import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIpComponent } from './new-ip.component';

describe('NewIpComponent', () => {
  let component: NewIpComponent;
  let fixture: ComponentFixture<NewIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
