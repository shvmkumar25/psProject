import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimercompComponent } from './timercomp.component';

describe('TimercompComponent', () => {
  let component: TimercompComponent;
  let fixture: ComponentFixture<TimercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimercompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
