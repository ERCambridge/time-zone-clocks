import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDisplayComponentComponent } from './clock-display-component.component';

describe('ClockDisplayComponentComponent', () => {
  let component: ClockDisplayComponentComponent;
  let fixture: ComponentFixture<ClockDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockDisplayComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
