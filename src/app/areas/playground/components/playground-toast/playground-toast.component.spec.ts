import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundToastComponent } from './playground-toast.component';

describe('PlaygroundToastComponent', () => {
  let component: PlaygroundToastComponent;
  let fixture: ComponentFixture<PlaygroundToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
