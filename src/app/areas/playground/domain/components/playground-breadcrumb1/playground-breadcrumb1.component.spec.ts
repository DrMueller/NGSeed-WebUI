import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundBreadcrumb1Component } from './playground-breadcrumb1.component';

describe('PlaygroundBreadcrumb1Component', () => {
  let component: PlaygroundBreadcrumb1Component;
  let fixture: ComponentFixture<PlaygroundBreadcrumb1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundBreadcrumb1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundBreadcrumb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
