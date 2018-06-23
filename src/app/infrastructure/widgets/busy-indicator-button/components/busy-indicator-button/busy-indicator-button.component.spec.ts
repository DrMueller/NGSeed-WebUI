import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyIndicatorButtonComponent } from './busy-indicator-button.component';

describe('BusyIndicatorButtonComponent', () => {
  let component: BusyIndicatorButtonComponent;
  let fixture: ComponentFixture<BusyIndicatorButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusyIndicatorButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusyIndicatorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
