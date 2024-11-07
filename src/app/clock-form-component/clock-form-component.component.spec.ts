import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockFormComponentComponent } from './clock-form-component.component';

describe('ClockFormComponentComponent', () => {
  let component: ClockFormComponentComponent;
  let fixture: ComponentFixture<ClockFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
