import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundBreadcrumb3Component } from './playground-breadcrumb3.component';

describe('PlaygroundBreadcrumb3Component', () => {
  let component: PlaygroundBreadcrumb3Component;
  let fixture: ComponentFixture<PlaygroundBreadcrumb3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundBreadcrumb3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundBreadcrumb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
