import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareMessageComponent } from './hardware-message.component';

describe('HardwareMessageComponent', () => {
  let component: HardwareMessageComponent;
  let fixture: ComponentFixture<HardwareMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
